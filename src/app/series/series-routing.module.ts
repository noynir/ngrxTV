// import { NgModule } from '@angular/core';
// import { Routes, RouterModule } from '@angular/router';
// import {SeriesContainerComponent} from "./series-container/seriesContainer.component";
// import {SeriesViewContainerComponent} from "./series-view-container/series-view-container.component";
// import {InitialAuthGuard} from "../services/intialAuth.guard";
// import {MainViewContainerComponent} from "../mainview/main-view-container/main-view-container.component";
// import {WatchlistContainerComponent} from "../watchlist/watchlist-container/watchlist-container.component";
//
// const routes: Routes = [
//   { path:'main',component:MainViewContainerComponent, canActivate:[InitialAuthGuard],
//     children:[
//       {path:'', redirectTo:'series',pathMatch:'full'},
//       { path:'series', component:SeriesContainerComponent },
//       { path:'series/:id', component:SeriesViewContainerComponent},
//       { path:'watchlist', component:WatchlistContainerComponent}
//     ]
//   }
//
// ];
//
// @NgModule({
//   imports: [RouterModule.forChild(routes)],
//   exports: [RouterModule],
//   providers: []
// })
// export class SeriesRoutingModule { }
