import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatToolbarModule } from '@angular/material/toolbar';

@Component({
  selector: 's-empty-mfe',
  templateUrl: './empty.html',
  standalone: true,
  imports: [
    CommonModule
  ]
})
export class EmptyComponent {

}
