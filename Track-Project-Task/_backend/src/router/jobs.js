const express=require('express')
const jobRouter=new express.Router();
const bcrypt=require('bcrypt');
const JobModel=require('../model/jobs.model')
const jwt=require('jsonwebtoken')
const auth=require('../middleware/middleware')


jobRouter.post('/create',(req,res,next)=>{
    let time=new Date();
    const job=new JobModel({
        company:req.body.company,
        jobTitle:req.body.jobTitle,
        designation:req.body.designation,
        location:req.body.location,
        offeredSalary:req.body.offeredSalary,
        noticePeriod:req.body.noticePeriod,
        requiredSkills:req.body.requiredSkills,
        experience:req.body.experience,
        postedOn:new Date().toDateString() +" "+ time.getHours()+":"+time.getMinutes()+":"+time.getSeconds()

    })

    job.save().then((job)=>{
       
        res.status(201).json({jobData:job})
    }).catch((err)=>{
        console.log(err)
            res.status(500).json({errorMessage:'Unable create Job'})
    })
})


jobRouter.get('/get',async(req,res,next)=>{
    try{
    let fetchedJobs=await JobModel.find();
    if(fetchedJobs.length)
    {
        res.status(201).json({fetchedJobs:fetchedJobs})
    }
    }
    catch{
        res.status(201).json({errorMessage:'Currently No Posts for New Jobs'})
    }

})


jobRouter.get('/:id',async(req,res,next)=>{
   console.log(req.params.id)
        try{
        let fetchedJD=await JobModel.findById(req.params.id);
        if(fetchedJD)
        {
            console.log(fetchedJD)
            res.status(201).json({fetchedJD:fetchedJD})
        }
        }
        catch{
            res.status(201).json({errorMessage:'Didn\'t Find JD for this JOB'})
        }
    
    })



module.exports=jobRouter;