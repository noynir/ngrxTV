import {List} from "../models/List";
import *  as ListActions from "../actions/lists"
import {Action} from "@ngrx/store";

export interface State {
  lists:List[]
}

const initialState: State = {
  lists:[]
}

export function reducer(state = initialState, action: Action):State{

    switch (action.type){

      case ListActions.ActionTypes.ADD_LIST:{
         return Object.assign({},state,{ lists:[...state.lists,action.payload]});
      }
      case ListActions.ActionTypes.UPDATE_LIST:{
         return Object.assign({},state,)
      }
      case ListActions.ActionTypes.DELETE_LIST:{
        return Object.assign({},state,{ lists: state.lists.filter((list)=>list.id != action.payload) });
      }
      default:{
        return state;
      }
    }
}



