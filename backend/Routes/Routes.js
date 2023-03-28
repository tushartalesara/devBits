const express = require('express')
const router = express.Router()
const User = require('../models/Users').User
let jwt = require('jsonwebtoken');
const authenticateUser=require("../middleWare/authenticateUser")

router.post('/signup', async (req, res) => {
    try {
        const existing_user= await User.findOne({email: req.body.email})
        if (existing_user) {
            return res.status(400).json({ error: "User with given email id already exists!!" })
        }
        created_user=await User.create({
            email: req.body.email,
            phoneNo: req.body.phoneNo,
            password: req.body.password,
        })
        return res.status(200).json("Registration Successfull.Please Login!")
    }
    catch (err) {
        res.status(400).json(err.message)
    }
})

router.post('/login', async (req, res) => {
    try {
        const existing_user= await User.findOne({email: req.body.email, password: req.body.password})

        if (!existing_user) {
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

router.get("/t",authenticateUser.authenticateUser,(req,res)=>{
    console.log(req.user)
    res.status(200).json("successfull")
})

module.exports = router