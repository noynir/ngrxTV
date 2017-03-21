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
  constructor() { }

  ngOnInit() {



  }

  seriesClicked(series){

  }

}
