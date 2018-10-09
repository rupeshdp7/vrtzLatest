import { Component, OnInit } from '@angular/core';
import { LoginUser } from "../login/login-user";
import { Http, Response, Headers, RequestOptions } from "@angular/http";
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";
import { UserCookies } from "../user-cookies";
import { CookieService } from 'ngx-cookie-service';
import { map, throttle } from 'rxjs/operators';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private http: HttpClient, private router: Router, private loggedInUser: CookieService) { }
  model = new LoginUser('', '', 0, 0, '')
  submitted = false;
  user = new UserCookies();

  ngOnInit() {
    console.clear();
    console.dir(this.model);
    console.dir(this.loggedInUser);

  }
  doLogin() {
    console.log("Login clicked");
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    this.http.post(`https://api.vertoz.com/ip/auth?fromSocial=0&fullname=&password=${this.model.password}&thirdPartyId=&userName=${this.model.username}`, {})
    .pipe(map(data=>data))
      . subscribe((json: Object) => {
          this.user = new UserCookies().deserialize(json);
        console.log(this.user);
        for (let key in this.user) {
          this.loggedInUser.set(key,this.user[key]);
        }
        console.log(this.loggedInUser);
        this.router.navigate(['dashboard']);
      }, 
      err => { console.error(err) } 
      );
  }

}
