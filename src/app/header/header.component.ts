import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  subGroupId : number = 0;
  showbacktomylogin : boolean = false;
  domainLogo : string = "../../assets/images/logo.png";
  showPwd : boolean = true;
  fromVertozDomain : boolean = true;
  isPublisher : boolean = false;
  isAgency : boolean = false;
  username :string = "Rupesh";
  constructor(private router : Router) { }

  ngOnInit() {
  }

  doLogout(){
    this.router.navigate(['/login']);
    localStorage.removeItem('currentUser');
  }
}
