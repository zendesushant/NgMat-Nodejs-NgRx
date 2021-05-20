import { Action, createAction } from "@ngrx/store";


export enum SignupActionTypes{

    SIGNUP="[SIGNUP] Signing Up",
    SIGNUP_SUCCESS="[SIGNUP] Signup Success",
    SIGNUP_FAIL="[SIGNUP] Signup FAILED"
}

export class SingupAction implements Action
{
    readonly type=SignupActionTypes.SIGNUP
    constructor(public payload:any){}
}

export class SingupActionSuccess implements Action
{
    readonly type=SignupActionTypes.SIGNUP_SUCCESS
    constructor(public payload:any){}
}

export class SingupActionFailed implements Action
{
    readonly type=SignupActionTypes.SIGNUP_FAIL
    constructor(public payload:any){}
}

export type  SignupActions=
SingupAction |
SingupActionSuccess|
SingupActionFailed