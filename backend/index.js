const express=require('express')
const app=express()
const mongoose=require('mongoose')
const cors=require('cors')
const config=require('config')

const routersurl=require('./Routes/Routes')
const db=config.get('mongoURI')

mongoose
    .connect(db,{useNewUrlParser:true})
    .then(()=>console.log('MongoDB connected...'))
    .catch(err=>console.log(err));

app.use(express.json())
app.use(cors())
app.use('/api',routersurl)

app.listen(5000)