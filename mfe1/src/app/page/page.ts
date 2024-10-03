import { Component, Input } from '@angular/core';

@Component({
  selector: 'mfe1-element',
  templateUrl: './page.html'
})
export class PageComponent {
  title = 'mfe1';
  @Input() texto: string = 'default';
}
