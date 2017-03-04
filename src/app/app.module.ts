import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {StoreModule} from "@ngrx/store";
import {reducer} from "./reducers";
import {AppRouting} from "./app.routing";
import {ListsComponent} from "./Components/Lists.component";

@NgModule({
  declarations: [
    AppComponent,
    ListsComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AppRouting,
    StoreModule.provideStore(reducer)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
