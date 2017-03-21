import { Component, OnInit } from '@angular/core';
import {AppState} from "../../reducers/index";
import {Store} from "@ngrx/store";
import * as auth from "../../actions/auth";

@Component({
  selector: 'app-login-container',
  templateUrl: './login-container.component.html',
  styleUrls: ['./login-container.component.css']
})
export class LoginContainerComponent implements OnInit {


  constructor(private store$:Store<AppState>) { }

  ngOnInit() {
  }

  login(data){
    this.store$.dispatch(new auth.DoLogin(data));
  }

}
