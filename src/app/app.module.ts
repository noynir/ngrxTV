import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {StoreModule} from "@ngrx/store";
import {reducer} from "./reducers";
import {AppRouting} from "./app.routing";
import {environment} from "../environments/environment";
import {ImageService} from "./services/image.service";
import {StoreDevtoolsModule} from "@ngrx/store-devtools";
import {CoreModule} from "./core.module";
import {MainviewModule} from "./mainview/mainview.module";


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AppRouting,
    CoreModule,
    MainviewModule
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
