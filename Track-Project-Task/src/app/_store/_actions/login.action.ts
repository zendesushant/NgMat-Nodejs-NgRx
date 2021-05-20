import { Action, createAction } from "@ngrx/store";


export enum LoginActionTypes{

    LOGIN="[LOGIN] Login Up",
    LOGIN_SUCCESS="[LOGIN] Login Success",
    LOGIN_FAIL="[LOGIN] Login FAILED"
}

export class LoginAction implements Action
{
    readonly type=LoginActionTypes.LOGIN
    constructor(public payload:any){}
}

export class LoginActionSuccess implements Action
{
    readonly type=LoginActionTypes.LOGIN_SUCCESS
    constructor(public payload:any){}
}

export class LoginActionFailed implements Action
{
    readonly type=LoginActionTypes.LOGIN_FAIL
    constructor(public payload:any){}
}

export type  LoginActions=
LoginAction |
LoginActionSuccess|
LoginActionFailed