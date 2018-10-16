import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { environment } from '../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  constructor(private http:HttpClient) { }

  login(username:string, password:string){
   return this.http.post<any>(`${environment.serviceUrl}auth?fromSocial=0&fullname=&password=${password}&thirdPartyId=&userName=${username}`, {})
   .pipe(map(user => {
        console.log(user);
        localStorage.setItem('currentUser', JSON.stringify(user));
        return user;
      }))
  }
}
