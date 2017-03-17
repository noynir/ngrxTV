import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {StoreModule} from "@ngrx/store";
import {reducer} from "./reducers";
import {AppRouting} from "./app.routing";
import {ListsModule} from "./modules/lists.module";
import {SeriesModule} from "./modules/Series.module";
import {AngularFireModule, AuthProviders, AuthMethods, FirebaseAppConfig} from 'angularfire2';
import {environment} from "../environments/environment";
import {ImageService} from "./services/image.service";
import {StoreDevtoolsModule} from "@ngrx/store-devtools";
import {AuthService} from "./services/auth.service";
import {LoginModule} from "./login/login.module";
import {EffectsModule} from "@ngrx/effects";
import {LoginEffects} from "./Effects/login-effects";


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
    ListsModule,
    AngularFireModule.initializeApp(firebaseConfig,myFirebaseAuthConfig),
    SeriesModule,
    StoreModule.provideStore(reducer),
    EffectsModule.run(LoginEffects),
    // Note that you must instrument after importing StoreModule
    StoreDevtoolsModule.instrumentOnlyWithExtension({
      maxAge: 5
    }),
    AppRouting
  ],
  providers: [ImageService,AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
