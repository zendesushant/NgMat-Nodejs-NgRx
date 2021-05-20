import { DatePipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { NodeWithI18n } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { SocialAuthService, SocialUser } from 'angularx-social-login';
import { FacebookLoginProvider, GoogleLoginProvider } from "angularx-social-login";
import { BehaviorSubject, Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { CreateJobModel } from '../_model/job.model';
@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  isAuthenticated:boolean=false
  showNavBar=new BehaviorSubject<boolean>(false);
  constructor(private authService:SocialAuthService,private http:HttpClient,private router:Router) { }

  onSignup(signupCredentials:{mid:string,username:string,password:string})
  {
   
    return this.http.post("http://localhost:3000/signup",signupCredentials)

  }


  onLogin(loginCredentials:{username:string,password:string})
  {
   
    return this.http.post("http://localhost:3000/login",loginCredentials)

  }

  onCreateJob(jobDetails:CreateJobModel)
  {
   
   
    this.http.post("http://localhost:3000/jobs/create",jobDetails).subscribe((data)=>{
        this.redirectToHomePage();
    })

  }

  getJobsFromDataBase()
  {
    return this.http.get("http://localhost:3000/jobs/get")
  }

  getJobDescription()
  {
    return this.http.get("http://localhost:3000/jobs/"+'609b6e17a0a64c4bf4a33cd7' )
  }

  login(token)
  {
     console.log("Loin Token"+token.token)
      this.isAuthenticated=true;
      this.showNavBar.next(true);
      const now=new Date();
      let expiresIn=now.getTime()+(token.expiresIn)*1000;
      let expiresInDate=new Date(expiresIn);
      console.log(expiresInDate)
      this.saveAuthDataToLocalStorage(token.token,expiresInDate)
      this.redirectToHomePage();
  }

  redirectOnsignWithGoogle(userInfo:SocialUser)
  {
    
    this.isAuthenticated=true;
    this.showNavBar.next(true);
    let now=new Date()
    let expires_at=now.getTime()+(60)*1000
    console.log(new Date(expires_at));
    this.saveAuthDataToLocalStorage(userInfo.idToken,new Date(expires_at))
    this.redirectToHomePage();
  }


  redirectToHomePage()
  {
    this.router.navigate(['/home']);
  }

  redirectToLogin()
  {
    this.router.navigate(['/login'])
  }

  setTimer(expiresIn:number)
  {
    expiresIn=expiresIn*1000;
    setTimeout(()=>{
      this.autoLogout()
    },expiresIn)
  }
  logout()
  {
  
        this.isAuthenticated=false
        this.showNavBar.next(false);
        this.removeAuthDataFromLocalStorage();
        this.redirectToLogin();
  }
  
  autoLogout()
  {
    this.removeAuthDataFromLocalStorage();
    this.isAuthenticated=false;
    this.showNavBar.next(false);
    this.router.navigate(['/login'])
  }

 
  autoLogin()
  {
    let token=this.getAuthDataFromLocalStorageData();
    
      if(!token)
      {
          return
      }
    else
    {
      let now=new Date();
      let expiresAfter=token.expiresIn;
      let remainingTimeToExpire=expiresAfter.getTime()-now.getTime();
      if(remainingTimeToExpire>0)
      {
        console.log(remainingTimeToExpire)
        this.isAuthenticated=true
        this.showNavBar.next(true);
        this.setTimer(remainingTimeToExpire/1000);
      }
    }
  }

  removeAuthDataFromLocalStorage()
  {
    localStorage.removeItem("token");
    localStorage.removeItem("expiresIn")
    
  }

  saveAuthDataToLocalStorage(token,expiresIn:Date)
  {

    localStorage.setItem("token",token);
    localStorage.setItem("expiresIn",expiresIn.toISOString())
  }
  getAuthDataFromLocalStorageData()
  {
    let token=localStorage.getItem("token");
    let expiresIn=localStorage.getItem("expiresIn");
    if(!token || !expiresIn)
    return null;
    else
    return {token:token,expiresIn:new Date(expiresIn)};
  }
  signInWithGoogle(): void {
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
    
  }

  signInWithFB(): void {
    this.authService.signIn(FacebookLoginProvider.PROVIDER_ID);
  }

  signOut(): void {
    this.authService.signOut();
  }
}
