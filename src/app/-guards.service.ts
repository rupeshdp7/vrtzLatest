import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class GuardsService implements CanActivate {

  constructor(private router : Router) { }
  canActivate(){
    if(localStorage.getItem("loggedinuserdetails")){
      return true;
    }// not logged in so redirect to login page with the return url

    this.router.navigate(['/login'], { queryParams: {  }});
    return false;
  }

}
