import { loadRemoteModule } from '@angular-architects/module-federation';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MFE1Component } from './mfe1/mfe1.component';
import { AppComponent } from './app.component';
// import { AppComponent } from './app.component';

const APP_ROUTES: Routes = [
  {
    path: 'mfe',
    component: MFE1Component,
  },
  {
    path: '',
    component: AppComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(APP_ROUTES, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
