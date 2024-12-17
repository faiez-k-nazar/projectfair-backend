const applicationMiddleware=(req,res,next)=>{
    console.log("inside applicationMiddleWare");
    next();
    
}
module.exports=applicationMiddleware