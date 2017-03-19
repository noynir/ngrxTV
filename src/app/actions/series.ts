
import {TvSeriesResponse} from "../models/tv-series-response";
import {Action} from "@ngrx/store";
import {TvSeries} from "../models/TvSeries";
export const ActionTypes={
  LOAD_SERIES:'load.series',
  SERIES_LOADED:'loaded.series',
  SELECT_SERIES:'select.series',
  SERIES_SELECTED_LOADED:'select.series.loaded'
}

export class LoadSeries implements Action{

  type=ActionTypes.LOAD_SERIES;
  constructor(public payload:{page:number}={page:1}){}
}
export class SeriesLoaded implements Action{

  type=ActionTypes.SERIES_LOADED;
  constructor(public payload:TvSeriesResponse){}
}
export class SelectSeries implements Action{

  type=ActionTypes.SELECT_SERIES;
  constructor(public payload:string){}
}
export class SelectedSeriesLoaded implements Action{

  type=ActionTypes.SERIES_SELECTED_LOADED;
  constructor(public payload:TvSeries){}
}
