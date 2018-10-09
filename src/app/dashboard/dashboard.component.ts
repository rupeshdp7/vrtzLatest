import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  
  constructor(private loggedInUser : CookieService) { }

  ngOnInit() {
    const allCookies: {} = this.loggedInUser.getAll();
console.log(allCookies);

  }

}
