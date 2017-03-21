import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TvdbService} from "./services/tvdb.service";
import {WatchlistService} from "./services/watchlist.service";
import {ImageService} from "./services/image.service";
import {InitialAuthGuard} from "./services/intialAuth.guard";

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [TvdbService,WatchlistService,ImageService]
})
export class CoreModule { }
