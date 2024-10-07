import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ApplicationRef, DoBootstrap, Injector, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { createCustomElement } from '@angular/elements';
import { PageComponent } from './page/page';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    PageComponent,
    MatToolbarModule,
    MatButtonModule
  ],
  providers: [],
  // entryComponents: [AppComponent]
})
export class AppModule implements DoBootstrap { 
  constructor(private injector: Injector){}
  ngDoBootstrap(): void {
      const webC = createCustomElement(AppComponent, {injector: this.injector});
      customElements.define('mfe2-element', webC)
  }
}
