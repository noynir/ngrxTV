import {Component, OnInit} from "@angular/core";
import {TvSeries} from "../../models/TvSeries";
import {Store} from "@ngrx/store";
import {AppState} from "../../reducers/index";
import {LoadSeries} from "../../actions/series";
import {Observable} from "rxjs";
import {AngularFire} from "angularfire2";
import {Router} from "@angular/router";
@Component({
  selector:'series',
  template:`
    
      <series-list [series]="series$ | async" (onSeriesClicked)="router.navigate(['main/series',$event.id])" ></series-list>
  `
})
export class SeriesContainerComponent implements OnInit{


  private series$:Observable<TvSeries[]>;

  constructor(private af:AngularFire,
              private store:Store<AppState>,
              private router:Router){}

  ngOnInit(){
    this.store.dispatch(new LoadSeries());

    this.series$=this.store.select((state) => state.currentSeries )
      .filter(series=>!!series)
      .map(series=>series.series.results);

  }


}
