import { Component, OnInit } from '@angular/core';
import {AppState} from "../../reducers/index";
import {Store} from "@ngrx/store";
import {ActivatedRoute} from "@angular/router";

import {Observable} from "rxjs";
import {TvSeries} from "../../models/TvSeries";
import * as watchList from "../../actions/watchlist";

@Component({
  selector: 'app-series-view-container',
  templateUrl: './series-view-container.component.html',
  styleUrls: ['./series-view-container.component.css']
})
export class SeriesViewContainerComponent implements OnInit {

  constructor(private route:ActivatedRoute) { }

  ngOnInit() {


  }

  onAddRemove(series,add){

  }

}
