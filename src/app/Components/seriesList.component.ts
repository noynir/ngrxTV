import {Component, OnInit, Input} from '@angular/core';
import {TvSeries} from "../models/TvSeries";

@Component({
    moduleId: module.id,
    selector: 'series-list',
    template:`
       <div>
          <div>
              <div *ngFor="let seriesItem of series">
                  <!--{{seriesItem.name}}-->
                  <img [src]="seriesItem.poster_path | imageUrl"  />
              </div>
          </div>
      </div>
    `
})
export class SeriesListComponent implements OnInit {

    @Input()
    series:TvSeries[];

    constructor() { }

    ngOnInit() { }

}
