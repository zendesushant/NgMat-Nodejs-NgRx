import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { from, Observable, of, Subject } from 'rxjs';
import { map, mergeAll, mergeMap, take, takeUntil, takeWhile, toArray } from 'rxjs/operators';
import { AppState } from 'src/app/_store/app.state';
import * as LoginActions from '../../_store/_actions/login.action'
import { SocialAuthService, SocialUser } from "angularx-social-login";
import { AuthenticationService } from 'src/app/_authentications/authentication.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {
  user: SocialUser;
  loggedIn: boolean;
  loginForm:FormGroup
  constructor(private appAuthService:AuthenticationService,private authService:SocialAuthService,private store:Store<AppState>,private fb:FormBuilder) { }

  ojb=new Subject<string>();

  ngOnInit(): void {
      

    this.loginForm=new FormGroup({

      username:new FormControl(null),
      password:new FormControl(null)
    })
    if(this.appAuthService.isAuthenticated)
    {
      this.appAuthService.redirectToHomePage()
    }
    else{
      this.appAuthService.redirectToLogin();
    }
    
  }
  redirectToSignup()
  {
    window.open("http://localhost:4200/signup", '_blank');
  }

  onLogin()
  {
    
    this.store.dispatch(new LoginActions.LoginAction(
      {
       username:this.loginForm.value.username,
       password:this.loginForm.value.password})
      )
  }

  onSignInWithGoogle()
  {
    this.authService.authState.subscribe((user) => {
      this.user = user;
      
      if(user!=null)
      {
    
        this.appAuthService.redirectOnsignWithGoogle(this.user)
      }
      
     
    });
    this.appAuthService.signInWithGoogle()
  }

  onSignInWithFB()
  {
    this.appAuthService.signInWithFB()
  }

}
