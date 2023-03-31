const mongoose=require('mongoose')
const Schema=mongoose.Schema

const cryptoSchema=new Schema({
    userId:{
        type: Schema.Types.ObjectId, 
        ref: 'Users',
        required: true,
    },
    crypto:{
        type:String,
        required:true,
    },
    quantity:{
        type: Number,
        default: 0,
        min: 0,
    },
})
module.exports=mongoose.model('Cryptos',cryptoSchema)