import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WatchlistRoutingModule } from './watchlist-routing.module';
import { WatchlistViewComponent } from './watchlist-view/watchlist-view.component';
import { WatchlistContainerComponent } from './watchlist-container/watchlist-container.component';
import {SharedModule} from "../shared/shared.module";

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    WatchlistRoutingModule
  ],
  declarations: [WatchlistViewComponent, WatchlistContainerComponent]
})
export class WatchlistModule { }
