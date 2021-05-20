

const mongoose =require('mongoose')

const jobsSchema=mongoose.Schema({
    company:{type:String},
    jobTitle:{type:String},
    designation:{type:String},
    location:{type:String},
    offeredSalary:{type:String},
    noticePeriod:{type:String},
    requiredSkills:{type:String},
    experience:{type:String},
    postedOn:{type:String}
})

const JobsModel=mongoose.model('JobsModel',jobsSchema);
module.exports=JobsModel
