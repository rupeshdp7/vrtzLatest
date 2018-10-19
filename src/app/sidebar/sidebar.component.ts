import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  menulist : any ;
  loggedinuserdetails : any;
  menuId : number;
  constructor(private http: HttpClient) { }
  ngOnInit() {
    console.log(localStorage.getItem('loggedinuserdetails'));
    this.loggedinuserdetails=JSON.parse(localStorage.getItem('loggedinuserdetails'));
    console.log(this.loggedinuserdetails);
    if(this.loggedinuserdetails.groupid==3){
      console.log("self managed client");
      this.http.get(`/JSON/self-client-menu.json`, {})
      .pipe(map(data=>data))
        . subscribe((data) => {
          this.menulist =data ;

          //  this.menulist = new Menu().
          /* for (let key in this.) {
            this.loggedInUser.set(key,this.menulist[key]);
          } */
        }, 
        err => { console.error("error"+err) } 
        );
    }
  }
  changeMenuId(id){
    if(this.menuId == id )
      this.menuId = 0;
    else  
      this.menuId = id;
  }

}
