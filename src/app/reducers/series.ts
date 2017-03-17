
import {TvSeries} from "../models/TvSeries";
import {TV_SERIES} from "../data/tvSeries";
import {Action} from "@ngrx/store";
import * as Series from '../actions/series' ;

export interface SeriesState{
  series:TvSeries[]
}

export const initialState:SeriesState={
  series:TV_SERIES
}

export function reducer(state = initialState, action:Action) : SeriesState{

  switch (action.type){
    case Series.ActionTypes.LOAD_SERIES:{
      return state;
    }
  }
}



