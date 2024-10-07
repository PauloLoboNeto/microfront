import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'mfe2-element',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'mfe2';

  constructor(private router: Router, private activatedRoute: ActivatedRoute){ }

  ngOnInit(){
    // this.router.initialNavigation(); 
  }

  goPage() {
    console.log(this.router)
    console.log(this.activatedRoute)
    this.router.navigate(['mfe/page'], {relativeTo: this.activatedRoute});
  }

  goAbout(){
    console.log(this.router)
    console.log(this.activatedRoute)
    this.router.navigate(['mfe/about'], {relativeTo: this.activatedRoute});
  }
  
  // goPage() {
  //   this.router.navigate([{ outlets: { mfe2: ['mfe/page'] } }], {relativeTo: this.activatedRoute, preserveFragment: true, skipLocationChange: true});
  // }

  // goAbout(){
  //   this.router.navigate([{ outlets: { mfe2: ['mfe/about'] } }], {relativeTo: this.activatedRoute, fragment: 'loading' });
  // }

}
