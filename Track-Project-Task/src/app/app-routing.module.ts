import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './_components/page-not-found/page-not-found.component';
import { AuthGaurdService } from './_authentications/auth-gaurd.service';
import { LoginFormComponent } from './_forms/login-form/login-form.component';
import {HomeComponent} from './_components/home/home.component'
import { SignupFormComponent } from './_forms/signup-form/signup-form.component';
import { CreateJobFormComponent } from './_forms/create-job-form/create-job-form.component';
import { JobDetailsComponent } from './_components/job-details/job-details.component';

const routes: Routes = [

  
  {path:'login',component:LoginFormComponent},
  {path:'signup',component:SignupFormComponent},
  {path:'home',component:HomeComponent,canActivate:[AuthGaurdService],children:[

    {path:':id',component:JobDetailsComponent}
  ]},
  {path:'createJob',component:CreateJobFormComponent,canActivate:[AuthGaurdService]},
  {path:'pagenotfound',component:PageNotFoundComponent,},
  {path:'',redirectTo:'login',pathMatch:'full'},
  {path:'**',redirectTo:'pagenotfound'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
