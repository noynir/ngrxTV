import {List} from "../models/List";
import *  as ListActions from "../actions/watchlist"
import {Action} from "@ngrx/store";
import {TvSeries} from "../models/TvSeries";

export interface WatchListState {
  list:TvSeries[]

}

export const initialState: WatchListState = {
  list:[]
}

export function reducer(state = initialState, action: Action):WatchListState{

  switch (action.type){

    case ListActions.ActionTypes.WATCHLIST_LOAD_COMPLETED:
    case ListActions.ActionTypes.ADD_LIST_COMPLETED:
    case ListActions.ActionTypes.DELETE_LIST_COMPLETED:{
      return Object.assign({},state,{list:action.payload});
    }
    default:{
      return state;
    }
  }
}




