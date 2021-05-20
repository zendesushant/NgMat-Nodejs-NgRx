import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AuthenticationService } from 'src/app/_authentications/authentication.service';
import { JobsService } from 'src/app/_authentications/jobs.service';
import { JobDetailsComponent } from '../job-details/job-details.component';

@Component({
  selector: 'app-display-jobs',
  templateUrl: './display-jobs.component.html',
  styleUrls: ['./display-jobs.component.scss']
})
export class DisplayJobsComponent implements OnInit {
  @Input() jobsList;
  JD
 id
  constructor(private authService:AuthenticationService, private jobService:JobsService,private dialog:MatDialog) { }
 
  ngOnInit(): void {
      
  }
  onViewJob()
  {
    this.JD=this.authService.getJobDescription().subscribe((result)=>{
      this.JD=result;
      console.log(this.JD)
    })
   
    this.dialog.open(JobDetailsComponent,{height:'400px',width:'600px'})
  }
  

  

}
