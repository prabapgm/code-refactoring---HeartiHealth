import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate{

  canActivate(route: import("@angular/router").ActivatedRouteSnapshot,
  state: import("@angular/router").RouterStateSnapshot): boolean | import("@angular/router").UrlTree 
  | import("rxjs").Observable<boolean
  | import("@angular/router").UrlTree>
  | Promise<boolean | import("@angular/router").UrlTree> {
    //if (JSON.parse(localStorage.getItem('isUserLoggedIn'))) {
      // logged in so return true
      //return true;
    //}
    return true;
    // not logged in so redirect to login page with the return url
    //this.router.navigateByUrl('/login');
    //return false;
  }
  constructor(private router: Router) { }
}
