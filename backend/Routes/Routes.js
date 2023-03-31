const express = require('express')
const router = express.Router()
const User = require('../models/Users')
const Stock = require('../models/Stocks')
const Crypto = require('../models/Cryptos')
let jwt = require('jsonwebtoken');
const authenticateUser=require("../middleWare/authenticateUser")
const bcrypt = require("bcrypt");
const config=require('config')


router.post('/signup', async (req, res) => {
    try {
        const existing_user= await User.findOne({email: req.body.email})
        if (existing_user) {
            return res.status(404).json({ error: "User with given email id already exists!!" })
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
            return res.status(404).json({ error: "Account not found!!" })
        }
        const result = await bcrypt.compare(req.body.password, existing_user.password);
        if (!result) {
            return res.status(404).json({ error: "Invalid Password!!" })
        }
        
        const email=existing_user.email
        const token= jwt.sign({email},config.get('JWTSecret'))
        return res.status(200).json(token)
    }
    catch (err) {
        res.status(400).json(err.message)
    }
})

router.get("/user",authenticateUser.authenticateUser,async(req,res)=>{
    try{
        const user= await User.findOne({email: req.user.email}) 
        const stocksDetails = await Stock.find({userId: user._id}).select("stock quantity -_id")
        const cryptosDetails = await Crypto.find({userId: user._id}).select("crypto quantity -_id")
        let stocksObj={};
        let cryptosObj={};
        stocksDetails.forEach((stock)=>stocksObj[stock["stock"]]=stock.quantity)
        cryptosDetails.forEach((crypto)=>cryptosObj[crypto["crypto"]]=crypto.quantity)

        return res.status(200).json({
            walletAmount: user.walletAmount,
            stocks: stocksObj,
            cryptos: cryptosObj
        })
    }
    catch(err){
        res.status(400).json(err.message)
    }
})

router.post("/buy/stock/:stock",authenticateUser.authenticateUser,async (req,res)=>{
    try{
        const stock=req.params.stock
        const user= await User.findOne({email: req.user.email})
        
        let stock_data= await Stock.findOne({userId: user._id, stock})
        if(!stock_data)
        stock_data= new Stock({userId: user._id, stock})

        stock_data.quantity+=req.body.quantity
        user.walletAmount-=req.body.quantity*req.body.price
        
        await user.save()
        await stock_data.save();

        return res.status(200).json("successfull")
    }
    catch(err){
        res.status(400).json(err.message)
    }
})

router.post("/buy/crypto/:crypto",authenticateUser.authenticateUser,async (req,res)=>{
    try{
        const crypto=req.params.crypto
        const user= await User.findOne({email: req.user.email})
        
        let crypto_data= await Crypto.findOne({userId: user._id, crypto})
        if(!crypto_data)
        crypto_data= new Crypto({userId: user._id, crypto})

        crypto_data.quantity+=req.body.quantity
        user.walletAmount-=req.body.quantity*req.body.price
        
        await user.save()
        await crypto_data.save();

        return res.status(200).json("successfull")
    }
    catch(err){
        res.status(400).json(err.message)
    }
})

router.post("/sell/stock/:stock",authenticateUser.authenticateUser,async (req,res)=>{
    try{
        const stock=req.params.stock
        const user= await User.findOne({email: req.user.email})
        
        let stock_data= await Stock.findOne({userId: user._id, stock})

        user.walletAmount+=req.body.quantity*req.body.price
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

router.post("/sell/crypto/:crypto",authenticateUser.authenticateUser,async (req,res)=>{
    try{
        const crypto=req.params.crypto
        const user= await User.findOne({email: req.user.email})
        
        let crypto_data= await Crypto.findOne({userId: user._id, crypto})

        user.walletAmount+=req.body.quantity*req.body.price
        crypto_data.quantity-=req.body.quantity
        
        if(crypto_data.quantity===0)
        await Crypto.findByIdAndDelete(crypto_data._id)
        else     
        await crypto_data.save();

        await user.save()
        return res.status(200).json("successfull")
    }
    catch(err){
        res.status(400).json(err.message)
    }
})

module.exports = router