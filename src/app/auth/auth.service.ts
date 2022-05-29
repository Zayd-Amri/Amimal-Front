import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { apiUrl } from 'src/environments/environment';
import { map } from 'rxjs/operators';
import { BehaviorSubject, Observable } from 'rxjs';
import * as moment from "moment";
import { User } from '../model/user.model';




@Injectable({
  providedIn: 'root'
})
export class AuthService {
   user$: BehaviorSubject<User>;
  

  constructor(private http: HttpClient) {
    const tokenItem = localStorage.getItem("id_token");
    if(tokenItem){
      let jwtData = tokenItem.split('.')[1];
      let decodedJwtJsonData = window.atob(jwtData)
      this.user$ = new BehaviorSubject<User>(JSON.parse(decodedJwtJsonData));
    }
  }

  login(username: string, password: string) {
    return this.http.post<any>(apiUrl+'login_check', {username, password})
    .pipe(map(res => {
      console.log(res);
      this.setSession(res);
      this.user$.next(res);
    })) 

}


private setSession(authResult) {
  const expiresAt = moment().add(authResult.expiresIn,'second');
  localStorage.setItem('id_token', authResult.token );
  localStorage.setItem("expires_at", JSON.stringify(expiresAt.valueOf()) );
}   

logout() {
  localStorage.removeItem("id_token");
  localStorage.removeItem("expires_at");
  this.user$.next(null);
}

public isLoggedIn() {
  return moment().isBefore(this.getExpiration());
}

isLoggedOut() {
  return !this.isLoggedIn();
}

getExpiration() {
  const expiration = localStorage.getItem("expires_at");
  const expiresAt = JSON.parse(expiration);
  return moment(expiresAt);
} 

 }

