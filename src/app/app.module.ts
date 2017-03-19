import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {StoreModule} from "@ngrx/store";
import {reducer} from "./reducers";
import {AppRouting} from "./app.routing";
import {AngularFireModule, AuthProviders, AuthMethods, FirebaseAppConfig} from 'angularfire2';
import {environment} from "../environments/environment";
import {ImageService} from "./services/image.service";
import {StoreDevtoolsModule} from "@ngrx/store-devtools";
// import {AuthService} from "./services/auth.service";
import {LoginModule} from "./login/login.module";
import {AuthService} from "./services/auth.service";
import {EffectsModule} from "@ngrx/effects";
import {LoginEffects} from "./Effects/login-effects";
import {CoreModule} from "./core.module";
import {SeriesEffects} from "./Effects/series-effects.service";
import {SeriesModule} from "./series/series.module";
import {WatchlistModule} from "./watchlist/watchlist.module";
import {WatchlistEffects} from "./Effects/watchlist-effects.service";
import { MainViewContainerComponent } from './main-view-container/main-view-container.component';
import {MaterialModule} from "@angular/material";
import {MainviewModule} from "./mainview/mainview.module";
// import {EffectsModule} from "@ngrx/effects";
// import {LoginEffects} from "./Effects/login-effects";


// Must export the config
export const firebaseConfig:FirebaseAppConfig = {
  apiKey: 'AIzaSyBq0YR5fSixiI40Qjyi92ffWgVStFxGNNw',
  authDomain:environment.production ? 'http://ngrxtv.firebaseapp.com' : 'http://localhost',
  databaseURL: 'https://ngrxtv.firebaseio.com/',
  storageBucket:'gs://ngrxtv.appspot.com/'

};

const myFirebaseAuthConfig = {
  provider: AuthProviders.Password,
  method: AuthMethods.Password
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    LoginModule,
    AngularFireModule.initializeApp(firebaseConfig,myFirebaseAuthConfig),
    StoreModule.provideStore(reducer),
    EffectsModule.run(LoginEffects),
    EffectsModule.run(SeriesEffects),
    EffectsModule.run(WatchlistEffects),
    // Note that you must instrument after importing StoreModule
    StoreDevtoolsModule.instrumentOnlyWithExtension({
      maxAge: 20
    }),
    AppRouting,
    CoreModule,
    MainviewModule
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
