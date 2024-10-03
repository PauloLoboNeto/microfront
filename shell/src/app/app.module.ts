import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NgZone } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MFE1Component } from './mfe1/mfe1.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    MFE1Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor(private ngZone: NgZone){
    (window as any).ngZone = this.ngZone;
  }
}
