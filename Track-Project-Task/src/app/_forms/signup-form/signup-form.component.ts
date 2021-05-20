import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AuthenticationService } from 'src/app/_authentications/authentication.service';
import { AppState } from 'src/app/_store/app.state';
import * as SignupActions from '../../_store/_actions/signup.action'
@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.scss']
})
export class SignupFormComponent implements OnInit {

  signupForm:FormGroup
  constructor(private appAuthService:AuthenticationService, private store:Store<AppState>,private fb:FormBuilder) { }



  ngOnInit(): void {

    this.signupForm=this.fb.group({
      mid:['',Validators.required],
      username:['',Validators.required],
      password:['',Validators.required]
    })
  }

  onSignup()
  {
    console.log(this.signupForm.value)
    this.store.dispatch(new SignupActions.SingupAction(
      {mid:this.signupForm.value.mid,
       username:this.signupForm.value.username,
       password:this.signupForm.value.password})
      )
  }

  onLogin()
  {
    this.appAuthService.redirectToLogin();
  }

}
