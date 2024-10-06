import { ApplicationRef, DoBootstrap, Injector, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { createCustomElement } from '@angular/elements';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PageComponent } from './page/page';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    PageComponent
    ],
  providers: [],
  entryComponents: [AppComponent]
})
export class AppModule implements DoBootstrap { 
  constructor(private injector: Injector){}
  ngDoBootstrap(): void {
      const webC = createCustomElement(PageComponent, {injector: this.injector});
      customElements.define('mfe1-element', webC)
  }
}
