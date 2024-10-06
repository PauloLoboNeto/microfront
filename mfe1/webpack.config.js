const mf = require("@angular-architects/module-federation/webpack");
const share = mf.share;
const path = require("path");
const sharedMappings = new mf.SharedMappings();
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
sharedMappings.register(path.join(__dirname, "tsconfig.json"));
// const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  output: {
    // publicPath: 'http://localhost:4201/',
    uniqueName: "mfe1",
    publicPath: 'auto',
    scriptType: "text/javascript",
  },
  resolve: {
    alias: {
      ...sharedMappings.getAliases(),
    },
  },
  devServer: {
    // hot: false,
    liveReload: false
  },
  // experiments: {
  //   outputModule: true,
  // },
  optimization: {
    runtimeChunk: false,
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "mfe1",
      filename: "remoteEntry.js",
      exposes: {
        "./Module": "./src/bootstrap.ts",
      },
      shared: share({
        ...mf.shareAll({ singleton: true })
      })
    }),
    sharedMappings.getPlugin(),
    // new MiniCssExtractPlugin(),
  ],
  // module: {
  //   rules: [ {
  //     test: /\.css$/i,
  //     use: [MiniCssExtractPlugin.loader, "css-loader"],
  //   }]
  // }
};
