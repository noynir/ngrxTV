import { Component, OnInit } from '@angular/core';
import {Store} from "@ngrx/store";
import {AppState} from "../../reducers/index";
import * as auth from "../../actions/auth";

@Component({
  selector: 'app-signup-container',
  templateUrl: './signup-container.component.html',
  styleUrls: ['./signup-container.component.css']
})
export class SignupContainerComponent implements OnInit {

  constructor(private store$:Store<AppState>) { }

  ngOnInit() {
  }

  signup(data){
      this.store$.dispatch(new auth.DoSignup(data));
  }

}
