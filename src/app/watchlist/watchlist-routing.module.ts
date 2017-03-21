import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {WatchlistContainerComponent} from "./watchlist-container/watchlist-container.component";
import {InitialAuthGuard} from "../services/intialAuth.guard";

const routes: Routes = [

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class WatchlistRoutingModule { }
