import {combineReducers} from "@ngrx/store";
import * as fromLists from "./watchlist";
import * as fromSeries from "./series";
import * as fromAuth from "./auth";


export interface AppState {
  watchList:fromLists.WatchListState,
  currentSeries:fromSeries.SeriesState,
  auth:fromAuth.AuthState
}

const initialState: AppState = {
  auth:fromAuth.initialState,
  watchList:fromLists.initialState,
  currentSeries:fromSeries.initialState
}

const reducers={
  auth:fromAuth.reducer,
  watchList:fromLists.reducer,
  currentSeries:fromSeries.reducer
}

// const combinedReducers = compose(localStorageSync(['auth'],true),combineReducers)(reducers);
const combinedReducers = combineReducers(reducers);

export function reducer(state:any, action:any){
  return combinedReducers(state,action);
}


//
// export function reducer(state = initialState, action: Action):AppState{
//
//     switch (action.type){
//
//       case ListActions.ActionTypes.ADD_LIST:{
//          return Object.assign({},state,{ lists:[...state.lists,action.payload]});
//       }
//       case ListActions.ActionTypes.UPDATE_LIST:{
//          return Object.assign({},state, {
//              lists:state.lists.map((list)=>{
//                 if(list.id==action.payload.id) return action.payload
//                 return list;
//               }),
//             updatingList:null
//          })
//       }
//       case ListActions.ActionTypes.SET_UPDATE_LIST:{
//          return Object.assign({},state,{ updatingList:state.lists.find((list)=>list.id == action.payload.id)})
//       }
//       case ListActions.ActionTypes.DELETE_LIST:{
//         return Object.assign({},state,{ lists: state.lists.filter((list)=>list.id != action.payload) });
//       }
//       default:{
//         return state;
//       }
//     }
// }



