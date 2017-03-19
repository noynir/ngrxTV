import {Action} from "@ngrx/store";
import {List} from "../models/List";
import {TvSeries} from "../models/TvSeries";


export const ActionTypes={
  ADD_LIST:"add.list",
  ADD_LIST_COMPLETED:"add.list.completed",
  DELETE_LIST:"delete.list",
  DELETE_LIST_COMPLETED:"delete.list.completed",
  WATCHLIST_LOAD:"load.list",
  WATCHLIST_LOAD_COMPLETED:"load.list.completed"
}

export class AddListAction implements Action{

  type=ActionTypes.ADD_LIST;

  constructor(public payload:TvSeries){}
}
export class AddListCompletedAction implements Action{

  type=ActionTypes.ADD_LIST_COMPLETED;

  constructor(public payload:TvSeries[]){}
}

export class DeleteListAction implements Action{

  type=ActionTypes.DELETE_LIST;

  constructor(public payload:TvSeries){}
}

export class DeleteListCompletedAction implements Action{

  type=ActionTypes.DELETE_LIST_COMPLETED;

  constructor(public payload:TvSeries[]){}
}

export class WatchListLoadCompletedAction implements Action{

  type=ActionTypes.WATCHLIST_LOAD_COMPLETED;

  constructor(public payload:TvSeries[]){}
}
export class WatchListLoadAction implements Action{

  type=ActionTypes.WATCHLIST_LOAD

  constructor(){}
}



