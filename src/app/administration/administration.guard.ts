import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AdministrationGuard implements CanActivate {

  role = this._authService.user$.value.roles[0];

  constructor( private _authService: AuthService, private _router : Router) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree  {

      if((this.role ==="ROLE_ADMIN") || (this.role =="ROLE_TRESORIER")){
        console.log(this._authService.user$);
        return true;
      } else {
       this._router.navigate(['/forbidden']);
        return false;
      }


  }
  
}
