import { Injectable } from '@angular/core';
import {Actions, toPayload, Effect} from "@ngrx/effects";
import {WatchlistService} from "../services/watchlist.service";
import * as watchList from "../actions/watchlist";
import {AppState} from "../reducers/index";
import {Store, Action} from "@ngrx/store";

@Injectable()
export class WatchlistEffects{

  constructor(private actions$:Actions,
              private store$:Store<AppState>,
              private watchlistService:WatchlistService) {}

  @Effect()
  addToWatchList$=this.actions$
    .ofType(watchList.ActionTypes.ADD_LIST)
    .withLatestFrom(this.store$)
    .switchMap(([action,appState]:[Action,AppState]) =>{
        let userId = appState.auth.currentUser.id;
        let tvSeries = action.payload;
          return this.watchlistService.addToUserWatchlist(userId,tvSeries);
    })
    .map((data)=>new watchList.AddListCompletedAction(data));

  @Effect()
  watchListLoad$=this.actions$
    .ofType(watchList.ActionTypes.WATCHLIST_LOAD)
    .withLatestFrom(this.store$)
    .switchMap(([action,appState]:[Action,AppState])=>{
        return this.watchlistService.getWatchList(appState.auth.currentUser.id)
    })
    .map((data)=> new watchList.WatchListLoadCompletedAction(data));

  @Effect()
  removeFromWatchList$=this.actions$
    .ofType(watchList.ActionTypes.DELETE_LIST)
    .withLatestFrom(this.store$)
    .switchMap(([action,appState]:[Action,AppState])=>{
        let series=appState.watchList.list.find((series)=>series.id == action.payload.id);

        return this.watchlistService.removeFromUserWatchlist(appState.auth.currentUser.id,series.$key);
    })
    .map((data)=> new watchList.DeleteListCompletedAction(data));



}
