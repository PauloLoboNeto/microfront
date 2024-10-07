import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'about', loadComponent: () => import('./about/about.component').then(m => m.AboutComponent), outlet: 'mfe1'},
  { path: 'page', loadComponent: () => import('./page/page').then(m => m.PageComponent), outlet: 'mfe1'},
  { path: 'page', loadComponent: () => import('./page/page').then(m => m.PageComponent)},
  { path: 'about', loadComponent: () => import('./about/about.component').then(m => m.AboutComponent)},
  { path: '**', redirectTo: ''},
  { path: 'about', loadComponent: () => import('./about/about.component').then(m => m.AboutComponent)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
