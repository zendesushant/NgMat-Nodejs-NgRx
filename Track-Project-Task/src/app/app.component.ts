import { Component } from '@angular/core';
import { AuthenticationService } from './_authentications/authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Track-Project-Task';
  isAuthenticated
  constructor(private appAuthServices:AuthenticationService){

  }
  
  ngOnInit()
  {
    
    this.appAuthServices.autoLogin()
    this.isAuthenticated=this.appAuthServices.isAuthenticated;
    this.appAuthServices.showNavBar.subscribe((isLoggedIn:boolean)=>{
    this.isAuthenticated = isLoggedIn;
    })
  }


}
