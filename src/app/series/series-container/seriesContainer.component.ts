import {Component, OnInit} from "@angular/core";
import {TvSeries} from "../../models/TvSeries";
import {Observable} from "rxjs";
import {Router} from "@angular/router";
import {AppState} from "../../reducers/index";
import {Store} from "@ngrx/store";
import {LoadSeries} from "../../actions/series";
@Component({
  selector:'series',
  template:`
    
      <series-list [series]="series$ | async" (onSeriesClicked)="router.navigate(['main/series',$event.id])" ></series-list>
  `
})
export class SeriesContainerComponent implements OnInit{


  private series$:Observable<TvSeries[]>;

  constructor(private store$:Store<AppState>,private router:Router){


  }

  ngOnInit(){

    this.store$.dispatch(new LoadSeries());

    this.series$ = this.store$.select((state)=> state.currentSeries);
  }


}
