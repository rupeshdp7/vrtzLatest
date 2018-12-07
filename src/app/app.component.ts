import { Component, OnInit } from '@angular/core';
import { Router, Event,  NavigationStart, RoutesRecognized,RouteConfigLoadStart,  RouteConfigLoadEnd, NavigationEnd, NavigationCancel, NavigationError } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit{
  title = 'vrtzLatest';
  _router ='';
  router;
  constructor( router: Router){
    }
    ngOnInit(){
      this.router.events.subscribe((event : Event) => {
           if(event instanceof NavigationStart) {
              // console.log(this.router);
           }
      });
  }
}
