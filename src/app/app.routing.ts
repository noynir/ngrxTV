
import {Routes, RouterModule} from "@angular/router";
import {NgModule} from "@angular/core";
import {SeriesContainerComponent} from "./Containers/seriesContainer.component";


const routes:Routes=[
  { path:'', component:SeriesContainerComponent}
]

@NgModule({
  imports:[RouterModule.forRoot(routes)],
  exports:[RouterModule]
})
export class AppRouting{}
