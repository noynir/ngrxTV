import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {ListsContainerComponent} from "./Containers/ListsContainer.component";
import {SeriesContainerComponent} from "./Containers/seriesContainer.component";

const routes:Routes=[
  {path:'', component:SeriesContainerComponent}
];

@NgModule({
  imports:[RouterModule.forRoot(routes)],
  exports:[RouterModule]
})
export class AppRouting{}
