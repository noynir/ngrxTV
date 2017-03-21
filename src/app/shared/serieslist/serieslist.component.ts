
import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {TvSeries} from "../../models/TvSeries";

@Component({
  moduleId: module.id,
  selector: 'series-list',
  templateUrl:'./serieslist.component.html',
  styleUrls:['./serieslist.component.css']
})
export class SeriesListComponent implements OnInit {

  @Input()
  series:TvSeries[];

  @Output()
  private onSeriesClicked=new EventEmitter<TvSeries>();

  constructor() { }

  ngOnInit() { }

}
