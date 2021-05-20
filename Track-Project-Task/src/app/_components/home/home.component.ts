import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { map } from 'rxjs/operators';
import { AuthenticationService } from 'src/app/_authentications/authentication.service';
import { JobsService } from 'src/app/_authentications/jobs.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private route:ActivatedRoute,private jobsService:JobsService,private appAuthService:AuthenticationService) { }
  fetchedJobs
  ngOnInit(): void {
    this.jobsService.getJobs()
    this.jobsService.emitJobs.subscribe((data)=>{
      this.fetchedJobs=data['fetchedJobs']
    })
      
  }
}