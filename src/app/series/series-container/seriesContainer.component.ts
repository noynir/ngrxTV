import {Component, OnInit} from "@angular/core";
import {TvSeries} from "../../models/TvSeries";
import {Observable} from "rxjs";
import {Router} from "@angular/router";
import {TV_SERIES} from "../../data/tvSeries";
@Component({
  selector:'series',
  template:`
    
      <series-list [series]="seriesList"  ></series-list>
  `
})
export class SeriesContainerComponent implements OnInit{

  private seriesList=TV_SERIES;

  constructor(private router:Router){}

  ngOnInit(){

  }


}
