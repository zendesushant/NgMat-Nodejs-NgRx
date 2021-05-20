const mongoose=require('mongoose')
const uniqueValidator=require('mongoose-unique-validator');
const userSchema=mongoose.Schema({
    mid:{
        type:String,
        unique:true
    
    },

    username:{
        type:String,
        unique:true
    },

    password:{
        type:String
    }
})

userSchema.plugin(uniqueValidator)
const users=mongoose.model('users',userSchema);
module.exports=users;