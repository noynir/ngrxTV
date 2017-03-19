
import {Routes, RouterModule} from "@angular/router";
import {NgModule} from "@angular/core";
import {MainViewContainerComponent} from "./main-view-container/main-view-container.component";
import {InitialAuthGuard} from "./services/intialAuth.guard";
const routes:Routes=[
  { path:'', redirectTo:'login', pathMatch:'full'}
]

@NgModule({
  imports:[RouterModule.forRoot(routes)],
  exports:[RouterModule]
})
export class AppRouting{}
