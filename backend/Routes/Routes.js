const express = require('express')
const router = express.Router()
const User = require('../models/Users')
const Stock = require('../models/Stocks')
let jwt = require('jsonwebtoken');
const authenticateUser=require("../middleWare/authenticateUser")
const bcrypt = require("bcrypt");
const Stocks = require('../models/Stocks');

router.post('/signup', async (req, res) => {
    try {
        const existing_user= await User.findOne({email: req.body.email})
        if (existing_user) {
            return res.status(400).json({ error: "User with given email id already exists!!" })
        }
        const encrypted_password=await bcrypt.hash(req.body.password, 10);
        created_user=await User.create({
            email: req.body.email,
            phoneNo: req.body.phoneNo,
            password: encrypted_password,
        })
        return res.status(200).json("Registration Successfull.Please Login!")
    }
    catch (err) {
        res.status(400).json(err.message)
    }
})

router.post('/login', async (req, res) => {
    try {
        const existing_user= await User.findOne({email: req.body.email})

        if (!existing_user) {
            return res.status(400).json({ error: "Invalid Credentials" })
        }
        const result = await bcrypt.compare(req.body.password, existing_user.password);
        if (!result) {
            return res.status(400).json({ error: "Invalid Credentials" })
        }
        
        const email=existing_user.email
        const token= jwt.sign({email},"secret")
        return res.status(200).json(token)
    }
    catch (err) {
        res.status(400).json(err.message)
    }
})

router.get("/user",authenticateUser.authenticateUser,async(req,res)=>{

    try{
        const user= await User.findOne({email: req.user.email}) 
        const stocks = await Stocks.find({userId: user._id}).select("stock quantity -_id")

        return res.status(200).json({
            walletAmount: user.walletAmount,
            stocks
        })
    }
    catch(err){
        res.status(400).json(err.message)
    }
})

router.post("/buy/:stock",authenticateUser.authenticateUser,async (req,res)=>{
    try{
        const stock=req.params.stock
        const user= await User.findOne({email: req.user.email})
        
        let stock_data= await Stock.findOne({userId: user._id, stock})
        if(!stock_data)
        stock_data= new Stock({userId: user._id, stock})

        stock_data.quantity+=req.body.quantity
        user.walletAmount-=req.body.quantity*req.body.prize
        
        await user.save()
        await stock_data.save();

        return res.status(200).json("successfull")
    }
    catch(err){
        res.status(400).json(err.message)
    }
})

router.post("/sell/:stock",authenticateUser.authenticateUser,async (req,res)=>{
    try{
        const stock=req.params.stock
        const user= await User.findOne({email: req.user.email})
        
        let stock_data= await Stock.findOne({userId: user._id, stock})

        user.walletAmount+=req.body.quantity*req.body.prize
        stock_data.quantity-=req.body.quantity
        
        if(stock_data.quantity===0)
        await Stock.findByIdAndDelete(stock_data._id)
        else     
        await stock_data.save();

        await user.save()
        return res.status(200).json("successfull")
    }
    catch(err){
        res.status(400).json(err.message)
    }
})

module.exports = router