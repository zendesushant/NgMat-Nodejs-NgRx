import { LoginModel } from "./model/login.model";
import { SignupModel } from "./model/signup.model";

export interface AppState
{
    readonly signupState:SignupModel
    readonly loginState:LoginModel
}