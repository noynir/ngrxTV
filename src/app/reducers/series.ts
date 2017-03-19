
import {TvSeries} from "../models/TvSeries";
import {TV_SERIES} from "../data/tvSeries";
import {Action} from "@ngrx/store";
import * as Series from '../actions/series' ;
import {TvSeriesResponse} from "../models/tv-series-response";

export interface SeriesState{
  series:TvSeriesResponse,
  selectedSeries:TvSeries
}

export const initialState:SeriesState={
  series:null,
  selectedSeries:null
}

export function reducer(state = initialState, action:Action) : SeriesState{

  switch (action.type){
    case Series.ActionTypes.SERIES_LOADED:{
      return Object.assign({},state,{series:action.payload});
    }
    case Series.ActionTypes.SERIES_SELECTED_LOADED:{
      return Object.assign({},state,{selectedSeries:action.payload});
    }

  }
}



