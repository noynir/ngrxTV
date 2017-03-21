import { Component, OnInit } from '@angular/core';
import {AppState} from "../../reducers/index";
import {Store} from "@ngrx/store";
import * as watchList from '../../actions/watchlist';
import {Observable} from "rxjs";
import {TvSeries} from "../../models/TvSeries";
import {Router} from "@angular/router";

@Component({
  selector: 'app-watchlist-container',
  templateUrl: './watchlist-container.component.html',
  styleUrls: ['./watchlist-container.component.css']
})
export class WatchlistContainerComponent implements OnInit {

  private watchList$:Observable<TvSeries[]>
  constructor(private store$:Store<AppState>,
              private router:Router) { }

  ngOnInit() {

    this.store$.dispatch(new watchList.WatchListLoadAction());

    this.watchList$=this.store$.select(state=> state.watchList ? state.watchList.list : [])
      .do((data)=>console.log(data));

  }

  seriesClicked(series){
    this.router.navigate(['/main/series',series.id]);
  }

}
