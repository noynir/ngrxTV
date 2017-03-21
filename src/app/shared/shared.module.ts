import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {ImageUrlPipe} from "./Pipes/imageUrl.pipe";
import {SeriesListComponent} from "./serieslist/serieslist.component";
import {RouterModule} from "@angular/router";

@NgModule({
  imports: [
    CommonModule
  ],
  exports:[SeriesListComponent,ImageUrlPipe],
  declarations: [SeriesListComponent,ImageUrlPipe]
})
export class SharedModule { }
