import { Injectable } from '@angular/core';
import {AngularFire, FirebaseListObservable} from "angularfire2";
import {TvSeries} from "../models/TvSeries";
import {Observable} from "rxjs";

@Injectable()
export class WatchlistService {


  constructor(private af:AngularFire) { }

  getWatchList(userId:string):Observable<TvSeries[]>{

    return this.af.database.list('/watchLists/'+userId).take(1);
  }

  addToUserWatchlist(userId:string,tvSeries:TvSeries):Observable<TvSeries[]>{


    let watchLists$ = this.af.database.list('/watchLists/'+userId);

    watchLists$.push(tvSeries);

    return watchLists$.take(1);

  }
  removeFromUserWatchlist(userId:string,key:string):Observable<TvSeries[]>{


    let watchLists = this.af.database.list('/watchLists/'+userId);

    watchLists.remove(key);

    return watchLists;

  }

}
