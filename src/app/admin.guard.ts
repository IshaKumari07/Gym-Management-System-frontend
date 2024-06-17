import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  Router,
} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './services/auth.service';


@Injectable({
  providedIn: 'root',
})
export class adminGuard implements CanActivate {
  constructor(private auth: AuthService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    if (this.auth.getToken()!=null && this.auth.getRole()=="ADMIN") {
      return true;
    }
    else{
    this.router.navigate(['']);
    return false;
    }
  }
}
