

import {TvSeries} from "../models/TvSeries";
import {Action} from "@ngrx/store";
import * as Series from '../actions/series';
import {TV_SERIES} from "../data/tvSeries";

export interface AppState{
  currentSeries:TvSeries[],
  selectedSeries:TvSeries
}

const intialState:AppState={
  currentSeries:[],
  selectedSeries:null
}

export function reducer(state=intialState,action:Action): AppState{

  switch (action.type){
    case Series.ActionTypes.LOAD_SERIES:
      return Object.assign({},state,{ currentSeries:TV_SERIES });
    case Series.ActionTypes.SELECT_SERIES:
      let seriesId= action.payload;
      if(state.currentSeries){
          let series= state.currentSeries.find((series)=> series.id == seriesId);
          return Object.assign({},state,{selectedSeries: series});
      }
      return state;
    default:
      return state;

  }

}




