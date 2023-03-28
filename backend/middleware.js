const jwt= require("jwt")

const authenticateUser= async function(req,res,next){
    try{
        const token = req.headers.authorization
        if(!token)
        return res.status(400).json("Invalid request")
        
        const user= jwt.verify(token,"secret")
        req.user=user
        console.log(req)
        next();
    }
    catch(err){
        return res.status(400).json(err.message)
    }
}

module.exports.authenticateUser=authenticateUser