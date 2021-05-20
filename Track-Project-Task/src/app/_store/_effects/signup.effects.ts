import { Injectable } from "@angular/core";
import { Actions,Effect,ofType } from "@ngrx/effects";
import { SignupActionTypes, SingupAction, SingupActionFailed, SingupActionSuccess } from "../_actions/signup.action";
import { mergeMap, map, catchError } from 'rxjs/operators';
import { AuthenticationService } from "src/app/_authentications/authentication.service";
import { of } from "rxjs";
import { LoginAction, LoginActionFailed, LoginActionSuccess, LoginActionTypes } from "../_actions/login.action";

@Injectable()
export class SignupEffects
{
    constructor(private action$:Actions,private authService:AuthenticationService){}
    @Effect()
    signup$=this.action$.pipe(
        ofType<SingupAction>(SignupActionTypes.SIGNUP),
        mergeMap(
            data=>this.authService.onSignup(data.payload).pipe(

             map((token)=> this.authService.login(token)
                          ),
             map(()=> 
             new SingupActionSuccess(data.payload)
                          ),

             catchError(error=> of(new SingupActionFailed(error))),
            )
        ),
    )


    @Effect()
    login$=this.action$.pipe(
        ofType<LoginAction>(LoginActionTypes.LOGIN),
        mergeMap(
            
            data=>this.authService.onLogin(data.payload).pipe(

             map((token)=> this.authService.login(token)
                          ),
             map(()=> 
             new LoginActionSuccess(data.payload)
                          ),

             catchError(error=> of(new LoginActionFailed(error))),
            )
        ),
    )
}
