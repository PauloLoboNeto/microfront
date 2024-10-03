const mf = require('@angular-architects/module-federation/webpack');
const path = require('path')
const sharedMappings = new mf.SharedMappings();
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
sharedMappings.register(path.join(__dirname, "tsconfig.json"), []);

module.exports = {
  output: {
    uniqueName: "shell",
    publicPath: '',
  },
  experiments: {
    outputModule: true,
  },
  optimization: {
    runtimeChunk: false
  },
  // devServer: {
  //   hot: false,
  //   liveReload: false
  // },
  resolve: {
    alias: {
      ...sharedMappings.getAliases(),
    },
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'shell',
      library: { type: "module" },
      shared: {
        ...mf.shareAll({ singleton: true })
      }
    }),
    sharedMappings.getPlugin()
  ],
};
