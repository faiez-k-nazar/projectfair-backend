
const jwt =require('jsonwebtoken')
const jwtMiddleware=(req,res,next)=>{
    console.log("inside jwtMiddleWare");

    try{
        const token = req.headers['authorization'].slice(7)
        console.log(token);
            if(token){
                jwtVerification = jwt.verify(token,process.env.jwtkey)
                console.log(jwtVerification);
                req.payload = jwtVerification.userId
                next();
            }else{
                               res.status(404).json("please provode the token")
            }
       
    }
    catch(err){
        res.status(401).json("please login")

    }
    
    
}
module.exports=jwtMiddleware