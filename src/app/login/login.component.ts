import { Component, OnInit } from '@angular/core';
import { LoginUser } from "../login/login-user";
import { Router } from "@angular/router";
import { map } from 'rxjs/operators';
import { AuthServiceService } from '../_services/auth-service.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  model = new LoginUser();
  submitted = false;
  user : Object;
  constructor(private authservice: AuthServiceService,
    private router: Router) { }
  

  ngOnInit() {
    console.clear();
    console.dir(this.model);
  }
  doLogin() {
    console.log("Login clicked");
    this.authservice.login(this.model.username,this.model.password)
    .pipe(map(data=>data))
      . subscribe((json: Object) => {
          // this.user = new UserCookies().deserialize(json);
          this.user = json;
          localStorage.setItem('loggedinuserdetails', JSON.stringify(json))
          console.log(this.user);
        this.router.navigate(['dashboard']);
      }, 
      err => { alert(err.error.responseText) } 
      );
  }
  doLogout(){
    this.router.navigate(['/login']);
  }

}
