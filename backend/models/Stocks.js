const mongoose=require('mongoose')
const Schema=mongoose.Schema

const stockSchema=new Schema({
    userId:{
        type: Schema.Types.ObjectId, 
        ref: 'Users',
        required: true,
    },
    stock:{
        type:String,
        required:true,
    },
    quantity:{
        type: Number,
        default: 0,
        min: 0,
    },
})
module.exports=mongoose.model('Stocks',stockSchema)