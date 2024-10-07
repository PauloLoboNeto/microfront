import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'mfe1-element',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'mfe1';

  constructor(private router: Router, private activatedRoute: ActivatedRoute){

  }

  goPage() {
    this.router.navigate(['page'], {relativeTo: this.activatedRoute});
  }

  goAbout(){
    this.router.navigate(['about'], {relativeTo: this.activatedRoute});
  }
  
  // goPage() {
  //   this.router.navigate([{ outlets: { mfe1: ['page'] } }]);
  // }

  // goAbout(){
  //   this.router.navigate([{ outlets: { mfe1: ['about'] } }]);
  // }
}
