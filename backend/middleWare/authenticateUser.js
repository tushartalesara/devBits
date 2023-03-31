let jwt = require('jsonwebtoken')
const config=require('config')

const authenticateUser= async function(req,res,next){
    try{
        const token = req.headers.authorization
        if(!token)
        return res.status(400).json("Invalid request")
        
        const user= jwt.verify(token,config.get('JWTSecret'))
        req.user=user
        next();
    }
    catch(err){
        return res.status(400).json(err.message)
    }
}

module.exports.authenticateUser=authenticateUser