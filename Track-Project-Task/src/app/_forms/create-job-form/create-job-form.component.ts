import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from 'src/app/_authentications/authentication.service';

@Component({
  selector: 'app-create-job-form',
  templateUrl: './create-job-form.component.html',
  styleUrls: ['./create-job-form.component.scss']
})
export class CreateJobFormComponent implements OnInit {

  constructor(private appAuthService:AuthenticationService ,private fb:FormBuilder) { }
  jobForm:FormGroup
  ngOnInit(): void {
    this.jobForm=this.fb.group({
      company:['',Validators.required],
      jobTitle:['',Validators.required],
      designation:['',Validators.required],
      experience:['',Validators.required],
      location:['',Validators.required],
      offeredSalary:[''],
      noticePeriod:['',Validators.required],
      requiredSkills:['',Validators.required],

    })

    this.jobForm.setValue({
      company:'mindtree',
      jobTitle:'Angular Developer',
      designation:'Associate Tech Lead',
      experience:'2',
      location:'Bengaluru',
      offeredSalary:'3.5lpa',
      noticePeriod:'60',
      requiredSkills:'Angular, JavaScript'

    })
  }

  onCreatingJob()
  {
    this.appAuthService.onCreateJob(this.jobForm.value)
  }

}
