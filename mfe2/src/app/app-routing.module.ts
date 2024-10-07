import { endsWith } from '@angular-architects/module-federation-tools';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
const routes: Routes = [
  {
    path: 'mfe', children: [
      { matcher: endsWith('about'), loadComponent: () => import('./about/about.component').then(m => m.AboutComponent), outlet: 'mfe2' },
      { matcher: endsWith('page'), loadComponent: () => import('./page/page').then(m => m.PageComponent), outlet: 'mfe2' },
      { matcher: endsWith('page'), loadComponent: () => import('./page/page').then(m => m.PageComponent) },
      { matcher: endsWith('about'), loadComponent: () => import('./about/about.component').then(m => m.AboutComponent) },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
