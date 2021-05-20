import { SignupModel,UserModel } from "../model/signup.model";
import * as fromApp from '../app.state'
import { Action, createReducer, on } from "@ngrx/store";
import {SignupActions} from '../_actions/signup.action';
import {SignupActionTypes} from '../_actions/signup.action'

const signupInitialState:SignupModel={
    users:[{
        mid:'',
        username:'',
        password:''
    }]
}


export function appReducer(state:SignupModel=signupInitialState,action:SignupActions)
{
    switch(action.type)
    {
        case SignupActionTypes.SIGNUP:
           
           return {...state,users:[...state.users,action.payload]}

        default:
             return state
            

            
            
    }
}




