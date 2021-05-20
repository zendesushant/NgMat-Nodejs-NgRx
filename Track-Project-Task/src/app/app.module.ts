import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatIconModule} from '@angular/material/icon';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatRadioModule} from '@angular/material/radio';
import {MatSelectModule} from '@angular/material/select';
import { SignupFormComponent } from './_forms/signup-form/signup-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { appReducer } from './_store/_reducer/app.reducer';
import { UsersDataComponent } from './users-data/users-data.component';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from 'src/environments/environment';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http'
import { AuthenticationService } from './_authentications/authentication.service';
import { EffectsModule } from '@ngrx/effects';
import { SignupEffects } from './_store/_effects/signup.effects';
import { HomeComponent } from './_components/home/home.component';
import { AuthGaurdService } from './_authentications/auth-gaurd.service';
import { LoginFormComponent } from './_forms/login-form/login-form.component';
import { loginReducer } from './_store/_reducer/login.reducer';
import { LoginEffects } from './_store/_effects/login.effects';
import { SocialLoginModule, SocialAuthServiceConfig } from 'angularx-social-login';
import { GoogleLoginProvider, FacebookLoginProvider} from 'angularx-social-login';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import { AuthInterceptor } from './_authentications/auth.service';
import { HeaderComponent } from './_components/header/header.component';
import { CreateJobFormComponent } from './_forms/create-job-form/create-job-form.component';
import { JobsService } from './_authentications/jobs.service';
import { DisplayJobsComponent } from './_components/display-jobs/display-jobs.component';
import { JobDetailsComponent } from './_components/job-details/job-details.component';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';

@NgModule({
  declarations: [
    AppComponent,
 
    SignupFormComponent,
      UsersDataComponent,
      HomeComponent,
      LoginFormComponent,
      HeaderComponent,
      CreateJobFormComponent,
      DisplayJobsComponent,
      JobDetailsComponent,
      
    
  ],
  entryComponents:[
    JobDetailsComponent
  ],
  imports: [
    SocialLoginModule,
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    StoreModule.forRoot(
      {signupState:appReducer,
        loginState:loginReducer
      }
      ),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: environment.production, // Restrict extension to log-only mode
    }),
    EffectsModule.forRoot([SignupEffects,LoginEffects]),
    BrowserAnimationsModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatCardModule,
    MatIconModule,
    MatSidenavModule,
    MatToolbarModule,
    MatDialogModule,
    HttpClientModule
  ],
  providers: [AuthenticationService,AuthGaurdService,JobsService,
    {
    provide: MatDialogRef,
    useValue: {}
  },
    
    {
        provide:HTTP_INTERCEPTORS,
        useClass:AuthInterceptor,
        multi:true
  },{
    provide: 'SocialAuthServiceConfig',
    useValue: {
      autoLogin: false,
      providers: [
        {
          id: GoogleLoginProvider.PROVIDER_ID,
          provider: new GoogleLoginProvider(
            '239980565701-jv2hvo3r7jg266flkro7nakpm3sd9p84.apps.googleusercontent.com'
          )
        },
        {
          id: FacebookLoginProvider.PROVIDER_ID,
          provider: new FacebookLoginProvider('3642956052470687')
        }
      ]
    } as SocialAuthServiceConfig,
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
