import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'shell';

  constructor(private router: Router){ }

  ngOnInit(){

    this.router.events.pipe(filter(event => event instanceof NavigationEnd))
    .subscribe((_res: any) => {
      // console.log(res);
    })
    this.router.navigate(['mfe'])
  }
}
