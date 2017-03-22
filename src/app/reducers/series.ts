
import {TvSeries} from "../models/TvSeries";
import {TV_SERIES} from "../data/tvSeries";
import {Action} from "@ngrx/store";
import * as Series from '../actions/series' ;
import {TvSeriesResponse} from "../models/tv-series-response";
import {AppState} from "./index";
import {createSelector} from 'reselect';
import * as fromSeries from './series';

export interface SeriesState{
  series:TvSeries[],
  selectedSeries:TvSeries
}

export const initialState:SeriesState={
  series:[],
  selectedSeries:null
}

export function reducer(state = initialState, action:Action) : SeriesState {

  switch (action.type) {
    case Series.ActionTypes.LOAD_SERIES:
      return Object.assign({}, state, {series: TV_SERIES});
    case Series.ActionTypes.SELECT_SERIES:
      let seriesId = action.payload;
      if (state.series) {
        let series = state.series.find((series) => series.id == seriesId);
        return Object.assign({}, state, {selectedSeries: series});
      }
      return state;
    default:
      return state;
  }
}



export const getSeriesState = (state: AppState) => state.currentSeries;

export const getSeriesList = createSelector(getSeriesState, (seriesState:SeriesState)=> seriesState.series);



