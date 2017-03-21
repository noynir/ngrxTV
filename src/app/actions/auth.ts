import {Action} from "@ngrx/store";
import {User} from "../models/user";
export const ActionTypes={
  LOGIN_LOAD:'login.load',
  LOGIN_LOAD_COMPLETED:'login.load.completed',
  DO_LOGIN:'do.login',
  LOGIN_SUCCESS:'login.success',
  LOGIN_FAIL:'login.failed',
  DO_SIGNUP:'do.signup',
  SIGNUP_SUCCESS:'signup.success',
  SIGNUP_FAIL:'signup.fail'
}

export class LoginLoad implements Action{

  type=ActionTypes.LOGIN_LOAD;

  constructor(){};
}
export class LoginLoadCompleted implements Action{

  type=ActionTypes.LOGIN_LOAD_COMPLETED;

  constructor(public payload:User){};
}

export class DoLogin implements Action{

  type=ActionTypes.DO_LOGIN;

  constructor(public payload:{email:string,password:string}){};
}

export class LoginSuccess implements Action{

  type=ActionTypes.LOGIN_SUCCESS;

  constructor(public payload:User){};
}
export class LoginFailed implements Action{

  type=ActionTypes.LOGIN_FAIL;

  constructor(){};
}
export class DoSignup implements Action{

  type=ActionTypes.DO_SIGNUP;

  constructor(public payload:User){};
}
export class SignupSuccess implements Action{

  type=ActionTypes.SIGNUP_SUCCESS;

  constructor(public payload:User){};
}
export class SignupFail implements Action{

  type=ActionTypes.SIGNUP_FAIL;

  constructor(public payload:string){}
}


