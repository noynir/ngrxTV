import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginContainerComponent} from "./login-container/login-container.component";
import {SignupContainerComponent} from "./signup-container/signup-container.component";

const routes: Routes = [
  {path:'login', component:LoginContainerComponent},
  {path:'signup', component:SignupContainerComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],

})
export class LoginRoutingModule { }
