import {Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter} from '@angular/core';
import {TvSeries} from "../../models/TvSeries";

@Component({
  selector: 'app-series-view',
  templateUrl: './series-view.component.html',
  styleUrls: ['./series-view.component.css'],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class SeriesViewComponent implements OnInit {

  @Input()
  private series:TvSeries;

  @Input()
  private inWatchList = false;

  @Output()
  private onAddClicked=new EventEmitter<TvSeries>();

  @Output()
  private onRemoveClicked=new EventEmitter<TvSeries>();

  constructor() { }

  ngOnInit() {
  }
  private onClick(series){
    if(this.inWatchList){
      this.onRemoveClicked.emit(series);
    }
    else{
      this.onAddClicked.emit(series);
    }
  }

}
