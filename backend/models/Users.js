const mongoose=require('mongoose')
const Schema=mongoose.Schema

const UserSchema=new Schema({
    email:{
        type:String,
        required:true,
        unique:true
    },
    phoneNo:{
        type:String
    },
    walletAmount:{
        type: Number,
        default: 1000,
        min: 0,
    },
    password:{
        type:String,
        required:true
    }
})
module.exports=mongoose.model('Users',UserSchema)