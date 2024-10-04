import { Component, Input } from '@angular/core';

@Component({
  selector: 'mfe2-element',
  templateUrl: './page.html'
})
export class PageComponent {
  title = 'mfe2';
  @Input() texto: string = 'mfe2';
}
