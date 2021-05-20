
import * as fromApp from '../app.state'
import { Action, createReducer, on } from "@ngrx/store";
import {LoginActions, LoginActionTypes} from '../_actions/login.action';
import {SignupActionTypes} from '../_actions/signup.action'
import { LoginModel } from '../model/login.model';

const initialState:LoginModel={
    users:[{
        
        username:'',
        password:''
    }]
}

export function loginReducer(state:LoginModel=initialState,action:LoginActions)
{
    switch(action.type)
    {
        case LoginActionTypes.LOGIN:
           
           return {...state,users:[...state.users,action.payload]}

        default:
             return state
       
    }
}