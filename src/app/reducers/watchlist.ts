import {List} from "../models/List";
import *  as ListActions from "../actions/watchlist"
import {Action, State} from "@ngrx/store";
import {TvSeries} from "../models/TvSeries";

export interface WatchListState {
  list:TvSeries[]

}

export const initialState: WatchListState = {
  list:[]
}

export function reducer(state = initialState, action: Action):WatchListState{

  switch (action.type){

    case ListActions.ActionTypes.WATCHLIST_LOAD:
      return state;
    case ListActions.ActionTypes.ADD_LIST:
      if(state) state.list=[]
      return Object.assign({},state,{list:[...(state.list),action.payload]});
    case ListActions.ActionTypes.DELETE_LIST:
      let newList = state.list.filter((item)=> item.id = action.payload.id);
      return Object.assign({},state,{list:newList});
    default:{
      return state;
    }
  }
}





