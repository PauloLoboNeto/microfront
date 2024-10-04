import { Component, Input } from '@angular/core';

@Component({
  selector: 'mfe3-element',
  templateUrl: './page.html'
})
export class PageComponent {
  title = 'mfe3';
  @Input() texto: string = 'mfe3';
}
