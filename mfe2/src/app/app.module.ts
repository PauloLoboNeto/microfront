import { ApplicationRef, DoBootstrap, Injector, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { createCustomElement } from '@angular/elements';
import { PageComponent } from './page/page';
import { PageModule } from './page/page.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PageModule
  ],
  providers: [],
  entryComponents: [AppComponent]
})
export class AppModule implements DoBootstrap { 
  constructor(private injector: Injector){}
  ngDoBootstrap(): void {
      const webC = createCustomElement(PageComponent, {injector: this.injector});
      customElements.define('mfe2-element', webC)
  }
}
