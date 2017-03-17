import {List} from "../models/List";
import *  as ListActions from "../actions/lists"
import {Action} from "@ngrx/store";

export interface ListState {
  lists:List[],
  updatingList:List
}

export const initialState: ListState = {
  lists:[],
  updatingList:null
}

export function reducer(state = initialState, action: Action):ListState{

  switch (action.type){

    case ListActions.ActionTypes.ADD_LIST:{
      return Object.assign({},state,{ lists:[...state.lists,action.payload]});
    }
    case ListActions.ActionTypes.UPDATE_LIST:{
      return Object.assign({},state, {
        lists:state.lists.map((list)=>{
          if(list.id==action.payload.id) return action.payload
          return list;
        }),
        updatingList:null
      })
    }
    case ListActions.ActionTypes.SET_UPDATE_LIST:{
      return Object.assign({},state,{ updatingList:state.lists.find((list)=>list.id == action.payload.id)})
    }
    case ListActions.ActionTypes.DELETE_LIST:{
      return Object.assign({},state,{ lists: state.lists.filter((list)=>list.id != action.payload) });
    }
    default:{
      return state;
    }
  }
}




