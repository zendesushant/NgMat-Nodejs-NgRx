import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { ActivatedRoute, Params } from '@angular/router';
import { AuthenticationService } from 'src/app/_authentications/authentication.service';
import {jobDescription} from '../../_services/job.constants'
@Component({
  selector: 'app-job-details',
  templateUrl: './job-details.component.html',
  styleUrls: ['./job-details.component.scss']
})
export class JobDetailsComponent implements OnInit {

  constructor(private route:ActivatedRoute,private dialogRef:MatDialogRef<JobDetailsComponent>,private appService:AuthenticationService) { }
  jobDetails
  ngOnInit(): void {
  this.jobDetails=jobDescription;
  
  }
  closeDialog()
  {
   
    this.dialogRef.close('Canceled')

  }

 
}

   


