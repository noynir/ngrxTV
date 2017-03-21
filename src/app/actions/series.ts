
import {Action} from "@ngrx/store";
export const ActionTypes={
  LOAD_SERIES:'load.series',
  SELECT_SERIES:'select.series'
}

export class LoadSeries implements Action{

  type=ActionTypes.LOAD_SERIES;

  constructor(){}

}
export class SelectSeries implements Action{

  type=ActionTypes.SELECT_SERIES;

  constructor(public payload:string){}

}
