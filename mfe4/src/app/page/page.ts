import { Component, Input } from '@angular/core';

@Component({
  selector: 'mfe4-element',
  templateUrl: './page.html'
})
export class PageComponent {
  title = 'mfe4';
  @Input() texto: string = 'mfe4';
}
