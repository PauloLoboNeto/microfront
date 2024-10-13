import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'mfe2-element',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'mfe2';
  last = 'mfe'

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private location: Location){ }

  ngOnInit(){
    console.log('mfe2')
    // this.router.navigateByUrl(this.location.path());
    // this.location.subscribe((popStateEvent) => {
    //   console.log(popStateEvent);
    //   this.router.navigateByUrl(this.location.path());
    // });

    // this.router.events.subscribe((event) => {
    //   if (event instanceof NavigationEnd) {
    //     console.log('Histórico de navegação:', event.urlAfterRedirects);
    //   }
    // });
    // this.router.initialNavigation(); 
  }

  goPage() {
    this.last = 'mfe/page'
    // console.log(this.router)
    // console.log(this.activatedRoute)
    // this.router.navigate(['mfe/page'], {relativeTo: this.activatedRoute});
    // this.router.navigate(['mfe/page']);
    this.router.navigateByUrl('mfe/page');
  }

  goAbout(){
    // console.log(this.router)
    this.last = 'mfe/about'
    // console.log(this.activatedRoute)
    this.router.navigateByUrl('mfe/about');
    // this.router.navigate(['mfe/about'], {relativeTo: this.activatedRoute});
  }
  
  // goPage() {
  //   this.router.navigate([{ outlets: { mfe2: ['mfe/page'] } }], {relativeTo: this.activatedRoute, preserveFragment: true, skipLocationChange: true});
  // }

  // goAbout(){
  //   this.router.navigate([{ outlets: { mfe2: ['mfe/about'] } }], {relativeTo: this.activatedRoute, fragment: 'loading' });
  // }

}
