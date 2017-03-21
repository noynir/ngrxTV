import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainviewRoutingModule } from './mainview-routing.module';
import {SeriesModule} from "../series/series.module";
import {WatchlistModule} from "../watchlist/watchlist.module";
import {MainViewContainerComponent} from "./main-view-container/main-view-container.component";

@NgModule({
  imports: [
    CommonModule,
    MainviewRoutingModule,
    SeriesModule,
    WatchlistModule
  ],
  declarations: [MainViewContainerComponent]
})
export class MainviewModule { }
