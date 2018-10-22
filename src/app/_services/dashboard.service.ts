import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { map, tap } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class DashboardService {
 
  userDetails = localStorage.getItem("loggedinuserdetails");
  constructor(private http : HttpClient) { 
    console.log(this.userDetails);
  }
  
  getCampaignOverviews(period:number){
    let httpOptions = {
      headers: new HttpHeaders({
        'tokenId':JSON.parse(this.userDetails).tokenId,
        'content-type' :'text/html'
      })
    }
    return this.http.get<string>(`${environment.reportUrl}performanceoverview/${period}`,
  httpOptions)
    .pipe(map(overview=>overview))
  }
  getCampaignLists(search:Object){
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'tokenId':JSON.parse(this.userDetails).tokenId
      })}
    return this.http.post(`${environment.serviceUrl}campaign/search`,search,
  httpOptions)
    .pipe(map(overview=>{
      console.log(overview);
      return overview;
    }))
  }
}

