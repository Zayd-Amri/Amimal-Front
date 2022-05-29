import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from '../model/user.model';
import { UsersService } from '../users/users.service';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class UserGuard implements CanActivate {

  username = this._authService.user$.value.username;
  userId :Number;

  constructor( private _authService: AuthService, private _router : Router, private _userService : UsersService) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree  {
      console.log(this.username)
      this._userService.getUserByEmail(this.username).subscribe(res=> {this.userId = res[0].id;console.log(this.userId);})

      if((1 == 1) ){
        return true;
      } else {
        setTimeout(function(){ 
          this._router.navigate(['/forbidden']);
          return false;
         }, 1000);
      }
    }
  
}