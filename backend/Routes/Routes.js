const express = require('express')
const router = express.Router()
const userModel = require('../models/Users')

router.post('/signup', async (req, res) => {

    try {
        const user1= await userModel.findOne({Email: req.body.Email})
        console.log(user1)
        if (user1) {
            console.log(user1)
            res.json({ error: "User with given email id already exists!!" })
            return;
        }
        const user = new userModel({
            Username: req.body.Username,
            PhoneNo: req.body.PhoneNo,
            Email: req.body.Email,
            Password: req.body.Password,
        })
        await user.save()
            .then(data => {
                res.json(data)
                console.log("hii")
            })
    }
    catch (err) {
        res.json(err.message)
    }
})
module.exports = router