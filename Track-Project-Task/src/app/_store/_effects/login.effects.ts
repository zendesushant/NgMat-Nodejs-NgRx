import { Injectable } from "@angular/core";
import { Actions,Effect,ofType } from "@ngrx/effects";
import { mergeMap, map, catchError } from 'rxjs/operators';
import { AuthenticationService } from "src/app/_authentications/authentication.service";
import { of } from "rxjs";
import { LoginAction, LoginActionFailed, LoginActionSuccess, LoginActionTypes } from "../_actions/login.action";

@Injectable()
export class LoginEffects
{
    constructor(private action$:Actions,private authService:AuthenticationService){}
    
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
