const express=require('express')
const router=new express.Router();
const bcrypt=require('bcrypt');
const UserModel=require('../model/model')
const jwt=require('jsonwebtoken')
const auth=require('../middleware/middleware')
router.post('/signup',(req,res,next)=>{
    
    bcrypt.hash(req.body.password,8).then((hashedPassword)=>{
        const user=new UserModel({
            mid:req.body.mid,
            username:req.body.username,
            password:hashedPassword
        })

        user.save().then((userData)=>{
            const token=jwt.sign({mid:req.mid},'signupSecreteKey',{expiresIn:"3600"})
            res.status(200).json({token:token,expiresIn:"3600"})
        }).catch((err)=>{
            console.log(err)
            res.status(500).json({message:'Internal servers error'})
        })
    })
})

router.post('/login',async(req,res,next)=>{
    
        const user=await UserModel.findOne({username:req.body.username})
        if(!user)
        {
            res.status(401).json({errorMessage:"User Dose Not Exist"})
        }
        else{
        const isUserVerified=await bcrypt.compare(req.body.password,user.password)
        if(isUserVerified)
        {
           
            const token=jwt.sign({mid:user.mid},'signupSecreteKey',{expiresIn:"3600"})
            res.status(200).json({token:token,expiresIn:"3600"})
        }
        else
        {
            res.status(500).json({message:'Password Authentication Failed'})
        }
        }

})
    


module.exports=router