const mongoose=require('mongoose')
const Schema=mongoose.Schema

const UserSchema=new Schema({
    Username:{
        type:String,
        required:true
    },
    PhoneNo:{
        type:String
    },
    Email:{
        type:String,
        required:true,
        unique:true
    },
    Password:{
        type:String,
        required:true
    }
})
module.exports=Item=mongoose.model('users',UserSchema)