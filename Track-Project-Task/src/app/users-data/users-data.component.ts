import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable,of } from 'rxjs';
import { AppState } from '../_store/app.state';
import { SignupModel, UserModel } from '../_store/model/signup.model';
import * as SignupActions from '../_store/_actions/signup.action'
@Component({
  selector: 'app-users-data',
  templateUrl: './users-data.component.html',
  styleUrls: ['./users-data.component.scss']
})

export class UsersDataComponent implements OnInit {

  constructor(private store:Store<AppState>) { }
  usersData:Observable<SignupModel>
  signedupUsersList:Observable<UserModel[]>
  ngOnInit(): void {

    this.usersData=this.store.select(store=>store.signupState)
    this.usersData.subscribe(data=>{
        this.signedupUsersList=of(data.users)
       
    })
    
  }
}