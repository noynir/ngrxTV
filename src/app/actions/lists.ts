import {Action} from "@ngrx/store";
import {List} from "../models/List";


export const ActionTypes={
  ADD_LIST:"add.list",
  SET_UPDATE_LIST:"set.update.list",
  UPDATE_LIST:"update.list",
  DELETE_LIST:"delete.list"
}

export class AddListAction implements Action{

  type=ActionTypes.ADD_LIST;

  constructor(public payload:List){}
}

export class DeleteListAction implements Action{

  type=ActionTypes.DELETE_LIST;

  constructor(public payload:number){}
}

export class UpdateListAction implements Action{

  type=ActionTypes.UPDATE_LIST;

  constructor(public payload:List){}
}
export class SetUpdateListAction implements Action{

  type=ActionTypes.SET_UPDATE_LIST;

  constructor(public payload:List){}
}



