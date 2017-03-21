import { Injectable } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from '@angular/router';
import { Observable } from 'rxjs/Observable';
import {AuthService} from "./auth.service";
import {AppState} from "../reducers/index";
import {Store} from "@ngrx/store";
import auth = firebase.auth;

@Injectable()
export class AuthGuard implements CanActivate {



  constructor(private auth:AuthService,private router:Router){}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

      if(!!this.auth.getLoggedInUser()){
        return true;
      }
      else{
        this.router.navigate(['/login']);
        return false;
      }
  }

}

