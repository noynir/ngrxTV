import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {ListsComponent} from "./Components/Lists.component";

const routes:Routes=[
  {path:'', component:ListsComponent}
];

@NgModule({
  imports:[RouterModule.forRoot(routes)],
  exports:[RouterModule]
})
export class AppRouting{}
