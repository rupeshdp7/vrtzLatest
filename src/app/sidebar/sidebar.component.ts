import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service'
import { Http, Response, Headers, RequestOptions } from "@angular/http";
import { HttpClient } from "@angular/common/http";
import { map, throttle } from 'rxjs/operators';

import { Menu } from './menu';
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  menulist[] : any ;
  loggedinuserdetails : any;

  constructor(private loggedInUser : CookieService,private http: HttpClient) { }
  ngOnInit() {
    this.loggedinuserdetails=this.loggedInUser.getAll();
    console.log(this.loggedinuserdetails);
    if(this.loggedinuserdetails.groupid==3){
      console.log("self managed client");
      this.http.get(`/JSON/self-client-menu.json`, {})
      .pipe(map(data=>data))
        . subscribe((data) => {
          this.menulist =data ;
          console.log(this.menulist);

          //  this.menulist = new Menu().
          /* for (let key in this.) {
            this.loggedInUser.set(key,this.menulist[key]);
          } */
        }, 
        err => { console.error(err) } 
        );
    }
  }

}
