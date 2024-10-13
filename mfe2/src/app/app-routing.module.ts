import { endsWith } from '@angular-architects/module-federation-tools';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmptyComponent } from './empty/empty';
const routes: Routes = [
  
  { path: 'mfe/about', loadComponent: () => import('./about/about.component').then(m => m.AboutComponent), outlet: 'mfe2' },
  { path: 'mfe/page', loadComponent: () => import('./page/page').then(m => m.PageComponent), outlet: 'mfe2' },
  { path: 'mfe/page', loadComponent: () => import('./page/page').then(m => m.PageComponent) },
  { path: 'mfe/about', loadComponent: () => import('./about/about.component').then(m => m.AboutComponent) },
  { path: '**', component: EmptyComponent },
      // { matcher: endsWith('about'), loadComponent: () => import('./about/about.component').then(m => m.AboutComponent), outlet: 'mfe2' },
      // { matcher: endsWith('page'), loadComponent: () => import('./page/page').then(m => m.PageComponent), outlet: 'mfe2' },
      // { matcher: endsWith('page'), loadComponent: () => import('./page/page').then(m => m.PageComponent) },
      // { matcher: endsWith('about'), loadComponent: () => import('./about/about.component').then(m => m.AboutComponent) },
      // { path: '**', component: EmptyComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
