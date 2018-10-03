import { Component, OnInit } from '@angular/core';
import { LoginUser } from "../login/login-user";
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  model = new LoginUser('','',0,0,'')
  submitted = false;
  
  ngOnInit() {
    console.log(this.model);
  }
  doLogin(){
    console.log("Login clicked")
  }

}
