import {Injectable} from "@angular/core";
import {AuthService} from "../services/auth.service";
import {Observable} from "rxjs";
import {Actions, toPayload, Effect} from "@ngrx/effects";
import {Action, Store} from "@ngrx/store";
import * as auth from "../actions/auth";
import * as watchList from "../actions/watchlist";
import {AppState} from "../reducers/index";
import {Router} from "@angular/router";
import {empty} from "rxjs/observable/empty";



@Injectable()
export class LoginEffects {

    constructor(private actions$:Actions,
                private store$:Store<AppState>,
                private authService:AuthService,
                private router:Router){}


    @Effect()
    loggedInUser$:Observable<Action>=this.actions$
      .ofType(auth.ActionTypes.LOGIN_LOAD)
      .startWith(new auth.LoginLoad())
      .switchMap((action)=> {
        return this.authService.LoggedInUser;
      })
      .map((user)=>new auth.LoginLoadCompleted(user));


    @Effect()
    login$:Observable<Action>=this.actions$
      .ofType(auth.ActionTypes.DO_LOGIN)
      .do((action)=>console.log(action))
      .map(toPayload)
      .do((payload)=>console.log(payload))
      .switchMap((cred) => this.authService.login(cred.email,cred.password))
      .map(user=> {

        if(user){
          this.router.navigate(['main']);
          return new auth.LoginSuccess(user);
        }
        else{
          return new auth.LoginFailed();
        }
      })

    @Effect()
    signup$:Observable<Action>=this.actions$
      .ofType(auth.ActionTypes.DO_SIGNUP)
      .do(action=>{console.log(action)})
      .map(toPayload)
      .switchMap((cred) => this.authService.signup(cred.email,cred.password))
      .map(user=> {

        if(user){
          this.router.navigate(['series']);
          return new auth.LoginSuccess(user);
        }
        else{
          return new auth.LoginFailed();
        }
      })

    @Effect()
    loginSuccess$:Observable<Action>=this.actions$
      .ofType(auth.ActionTypes.LOGIN_SUCCESS,
          auth.ActionTypes.SIGNUP_SUCCESS,
          auth.ActionTypes.LOGIN_LOAD_COMPLETED)
      .withLatestFrom(this.store$)
      .map(([action,appState]:[Action,AppState])=>{
        if(appState.auth.loaded && appState.auth.currentUser){
          return new watchList.WatchListLoadAction();
        }

        return empty();
      })


}
