import {Component, OnInit} from "@angular/core";
import {TvSeries} from "../../models/TvSeries";
import {Observable} from "rxjs";
import {Router} from "@angular/router";
@Component({
  selector:'series',
  template:`
    
      <series-list [series]="series$ | async" (onSeriesClicked)="router.navigate(['main/series',$event.id])" ></series-list>
  `
})
export class SeriesContainerComponent implements OnInit{


  private series$:Observable<TvSeries[]>;

  constructor(private router:Router){}

  ngOnInit(){

  }


}
