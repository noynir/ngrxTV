import {User} from "../models/user";
import * as authActions from "../actions/auth";
import {Action} from "@ngrx/store";
export interface AuthState{
  currentUser:User,
  authError:Error,
  loaded:boolean,
}

export const initialState:AuthState={
  currentUser:null,
  authError:null,
  loaded:false
}

export function reducer(state=initialState, action:Action):AuthState{

  switch (action.type){
    case authActions.ActionTypes.LOGIN_LOAD_COMPLETED:
      return Object.assign({},state,{currentUser:action.payload,loaded:true});
    case authActions.ActionTypes.LOGIN_SUCCESS:
    case authActions.ActionTypes.SIGNUP_SUCCESS:
      return Object.assign({},state,{currentUser:action.payload,authError:null});
    case authActions.ActionTypes.LOGIN_FAIL:
    case authActions.ActionTypes.SIGNUP_FAIL:
      return Object.assign({},state,{currentUser:null,authError:action.payload});
    default:
      return state;
  }
}
