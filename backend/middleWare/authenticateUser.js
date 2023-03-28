let jwt = require('jsonwebtoken')

const authenticateUser= async function(req,res,next){
    try{
        const token = req.headers.authorization
        if(!token)
        return res.status(400).json("Invalid request")
        
        const user= jwt.verify(token,"secret")
        req.user=user
        next();
    }
    catch(err){
        return res.status(400).json(err.message)
    }
}

module.exports.authenticateUser=authenticateUser