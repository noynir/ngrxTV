import { Component, OnInit } from '@angular/core';
import {AppState} from "../../reducers/index";
import {Store} from "@ngrx/store";
import {ActivatedRoute} from "@angular/router";
import {Observable} from "rxjs";
import {TvSeries} from "../../models/TvSeries";
import * as watchList from "../../actions/watchlist";
import {SelectSeries} from "../../actions/series";

@Component({
  selector: 'app-series-view-container',
  templateUrl: './series-view-container.component.html',
  styleUrls: ['./series-view-container.component.css']
})
export class SeriesViewContainerComponent implements OnInit {

  private series$:Observable<TvSeries>;
  private isInWatchList$:Observable<boolean>;
  constructor(private store$:Store<AppState>,
    private route:ActivatedRoute) { }

  ngOnInit() {

    this.route.params
      .map(params=>params['id'])
      .subscribe(id=>{
        if(id){
          this.store$.dispatch(new SelectSeries(id));
        }
      });

     this.series$=this.store$.select((state)=>state.selectedSeries)




  }

  onAddRemove(series,add){
      if(add){
        this.store$.dispatch(new watchList.AddListAction(series));
      }
      else{
        this.store$.dispatch(new watchList.DeleteListAction(series));
      }
  }

}
