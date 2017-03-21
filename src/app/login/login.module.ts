import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginContainerComponent } from './login-container/login-container.component';
import { LoginViewComponent } from './login-view/login-view.component';
import {FormsModule} from "@angular/forms";
import { SignupContainerComponent } from './signup-container/signup-container.component';
import {LoginRoutingModule} from "./login-routing.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    LoginRoutingModule
  ],
  declarations: [LoginContainerComponent, LoginViewComponent, SignupContainerComponent],
  exports: [LoginContainerComponent, LoginViewComponent]
})
export class LoginModule { }
