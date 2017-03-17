import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {StoreModule} from "@ngrx/store";
import {reducer} from "./reducers";
import {AppRouting} from "./app.routing";
import {ListsModule} from "./modules/lists.module";
import {SeriesModule} from "./modules/Series.module";
import { AngularFireModule } from 'angularfire2';
import {environment} from "../environments/environment";
import {ImageUrlPipe} from "./Pipes/imageUrl.pipe";
import {ImageService} from "./services/image.service";
import {StoreDevtoolsModule} from "@ngrx/store-devtools";

// Must export the config
export const firebaseConfig = {
  apiKey: 'AIzaSyBq0YR5fSixiI40Qjyi92ffWgVStFxGNNw',
  authDomain:environment.production ? 'http://ngrxtv.firebaseapp.com' : 'http://localhost',

    databaseURL: 'https://ngrxtv.firebaseio.com/',
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AppRouting,
    ListsModule,
    SeriesModule,
    AngularFireModule.initializeApp(firebaseConfig),
    StoreModule.provideStore(reducer),
    // Note that you must instrument after importing StoreModule
    StoreDevtoolsModule.instrumentOnlyWithExtension({
      maxAge: 5
    })
  ],
  providers: [ImageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
