import {Component, OnInit} from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'app works!';

  constructor(){}

  ngOnInit(){
    console.log('init');
    // this.series$= this.af.database.list('/series');
    // TV_SERIES.forEach((item)=>{
    //   this.series$.push(item);
    // })
  }

}
