import { Injectable } from '@angular/core';
import {AngularFire} from "angularfire2";
import {Observable, BehaviorSubject, Subject} from "rxjs";
import {User} from "../models/user";

@Injectable()
export class AuthService {

  private _getLoggedInUser$:BehaviorSubject<User>;

  constructor(private af:AngularFire ) {
    this._getLoggedInUser$=new BehaviorSubject<User>(null);
    this.af.auth.subscribe((user)=>{
      if(user){
        this._getLoggedInUser$.next(new User(user.auth.uid,user.auth.email));
      }
      else{
        this._getLoggedInUser$.next(null);
      }
    });
  }

  getLoggedInUser():User{
      return this._getLoggedInUser$.getValue();
  }
  public get LoggedInUser():Observable<User>{
    return Observable.create( (observer) =>{
      this.af.auth.subscribe((user)=>{
        if(user){
          observer.next(new User(user.uid,user.auth.email));
        }
        else{
          observer.next(null);
        }
      });
    });
  }

  login(email:string,password:string):Observable<User>{

    return Observable.create(observer=>{

        this.af.auth.login({email:email, password:password})
          .then((user)=>{

            if(user){
              observer.next(new User(user.auth.uid,user.auth.email))
            }else{
              observer.next(null  );
            }
            observer.complete()
          },
          err=>{
            observer.error(err);
          })
    });
  }

  signup(email:string,password:string):Observable<User>{

    return Observable.create(observer=>{

      this.af.auth.createUser({email:email, password:password})
        .then((user)=>{

            if(user){
              observer.next(new User(user.auth.uid,user.auth.email))
            }else{
              observer.next(null  );
            }
            observer.complete()
          },
          err=>{
            observer.error(err);
          })
    });
  }

}
