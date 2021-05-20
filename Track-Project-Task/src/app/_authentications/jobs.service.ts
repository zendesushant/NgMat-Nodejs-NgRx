import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { CreateJobModel } from "../_model/job.model";
import { AuthenticationService } from "./authentication.service";

@Injectable()
export class JobsService 
{

emitJobs=new Subject()
constructor(private appAuthService:AuthenticationService){}
    getJobs()
    {
        this.appAuthService.getJobsFromDataBase().subscribe((fetchedJobs)=>{
                this.emitJobs.next(fetchedJobs)
        })
    }
} 