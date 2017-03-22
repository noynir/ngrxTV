import {Action} from "@ngrx/store";
import {TvSeries} from "../models/TvSeries";


export const ActionTypes={
  ADD_LIST:"add.list",
  DELETE_LIST:"delete.list",
  WATCHLIST_LOAD:"load.list",
}

export class AddListAction implements Action{

  type=ActionTypes.ADD_LIST;

  constructor(public payload:TvSeries){}
}

export class DeleteListAction implements Action{

  type=ActionTypes.DELETE_LIST;

  constructor(public payload:TvSeries){}
}

export class WatchListLoadAction implements Action{

  type=ActionTypes.WATCHLIST_LOAD

  constructor(){}
}



