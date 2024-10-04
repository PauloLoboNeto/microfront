import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { PageComponent } from './page';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    PageComponent
  ],
  imports: [
    BrowserModule,
    CommonModule
  ],
  exports: [PageComponent]
})
export class PageModule { }
