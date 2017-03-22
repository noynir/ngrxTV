import {TvSeries} from "../models/TvSeries";
import {Action, combineReducers} from "@ngrx/store";
import * as fromSeries from '../reducers/series';
import * as fromWatchList from '../reducers/watchlist';
import {TV_SERIES} from "../data/tvSeries";
import {SeriesState} from "./series";
import {WatchListState} from "./watchlist";

export interface AppState{
  currentSeries:SeriesState,
  watchList:WatchListState
}

const intialState:AppState={
  currentSeries:fromSeries.initialState,
  watchList:fromWatchList.initialState
}

const reducers={
  currentSeries:fromSeries.reducer,
  watchList:fromWatchList.reducer
}
const combinedReducers = combineReducers(reducers);

export function reducer(state=intialState,action:Action): AppState{

    return combinedReducers(state,action);

}




