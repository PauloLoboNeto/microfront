import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatToolbarModule } from '@angular/material/toolbar';

@Component({
  selector: 's-page',
  templateUrl: './page.html',
  styleUrls: ['./page.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    MatToolbarModule,
    MatCardModule,
    MatGridListModule
  ]
})
export class PageComponent {
  title = 'mfe1';
  @Input() texto: string = 'mfe1';

  constructor(){
    console.log('aqui')
  }
}
