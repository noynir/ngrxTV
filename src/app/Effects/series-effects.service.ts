import { Injectable } from '@angular/core';
import * as series from '../actions/series';
import {Observable} from "rxjs";
import {Action} from "@ngrx/store";
import {Actions, Effect, toPayload} from "@ngrx/effects";
import {TvdbService} from "../services/tvdb.service";

@Injectable()
export class SeriesEffects{

  constructor(private actions$:Actions,
              private tvdbService:TvdbService) { }

  @Effect()
  loadSeries$:Observable<Action>=this.actions$
    .ofType(series.ActionTypes.LOAD_SERIES)
    .map(toPayload)
    .switchMap((payload)=> this.tvdbService.getPopular(payload.page) )
    .map((data)=> new series.SeriesLoaded(data))

  @Effect()
  loadSelectedSeries$:Observable<Action> = this.actions$
    .ofType(series.ActionTypes.SELECT_SERIES)
    .map(toPayload)
    .switchMap((payload)=> this.tvdbService.getTvSeries(payload))
    .map((data)=> new series.SelectedSeriesLoaded(data))


}
