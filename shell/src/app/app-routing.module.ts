import { loadRemoteModule } from '@angular-architects/module-federation';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MFE1Component } from './mfe1/mfe1.component';
import { AppComponent } from './app.component';
import { UrlMatcher, UrlSegment } from '@angular/router';

export function startsWith(prefix: string): UrlMatcher {
    return (url: UrlSegment[]) => {
        const fullUrl = url.map(u => u.path).join('/');
        if (fullUrl.startsWith(prefix)) {
            return ({ consumed: url});
        }
        return null;
    };
}

const APP_ROUTES: Routes = [
  {
    matcher: startsWith('mfe'),
    component: MFE1Component
  },
  {
    path: '',
    component: AppComponent,
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(APP_ROUTES)],
  // providers: [{
  //   provide: APP_BASE_HREF, useValue: '/shell'
  // }],
  exports: [RouterModule]
})
export class AppRoutingModule { }
