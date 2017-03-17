import {Component, OnInit} from "@angular/core";
import {TvSeries} from "../models/TvSeries";
import {TV_SERIES} from "../data/tvSeries";
import {Store} from "@ngrx/store";
import {AppState} from "../reducers/index";
import {LoadSeries} from "../actions/series";
import {Observable} from "rxjs";
@Component({
  selector:'series',
  template:`
      <series-list [series]="series$ | async" ></series-list>
  `
})
export class SeriesContainerComponent implements OnInit{


  private series$:Observable<TvSeries[]>;

  constructor(private store:Store<AppState>){}

  ngOnInit(){
    this.store.dispatch(new LoadSeries());

    this.series$=this.store.select((state) => state.currentSeries.series );


  }

}
