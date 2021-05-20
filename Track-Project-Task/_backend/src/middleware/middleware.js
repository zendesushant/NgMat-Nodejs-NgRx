

const auth=async(req,res,next)=>{

    let token=req.header('Authorization').replace("Bearer ","");
    console.log('Extracted Token => '+token);
}

module.exports=auth;