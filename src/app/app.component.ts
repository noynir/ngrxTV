import {Component, OnInit} from '@angular/core';
import {AngularFire, FirebaseListObservable} from "angularfire2";
import {TvSeries} from "./models/TvSeries";
import {TV_SERIES} from "./data/tvSeries";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'app works!';

  private series$:FirebaseListObservable<any>;

  constructor(private af:AngularFire){}

  ngOnInit(){
    this.series$= this.af.database.list('/series');
    TV_SERIES.forEach((item)=>{
      this.series$.push(item);
    })
  }

}
