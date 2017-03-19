import { Injectable } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from '@angular/router';
import { Observable } from 'rxjs/Observable';
import {AuthService} from "./auth.service";
import {AppState} from "../reducers/index";
import {Store} from "@ngrx/store";
import auth = firebase.auth;
import {User} from "../models/user";

@Injectable()
export class InitialAuthGuard implements CanActivate {

  constructor(private store$:Store<AppState>,private auth:AuthService,private router:Router){}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

      return this.waitUntillUserLoads$()
        .switchMap(user =>{

          if(!user){
              this.router.navigate(['/login']);
          }
          return Observable.of(!!user);
        })
  }

  private waitUntillUserLoads$():Observable<User>{
    return this.store$.select((state)=> state.auth)
      .filter((auth)=> auth.loaded)
      .map(auth=>auth.currentUser)
      .take(1);
  }
}


