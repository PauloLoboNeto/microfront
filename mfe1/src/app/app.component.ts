import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-mfe',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'mfe1';
  @Input() texto: string = '';
}
