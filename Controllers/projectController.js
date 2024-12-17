
const projects = require('../Models/projectSChema')

exports.addProjectAPI = async(req,res)=>{
    console.log("Inside add project API");

    const {title,language,github,website,overview}=req.body
    const projectImg = req.file.filename
    const userId = req.payload

    try{

        const project = await projects.findOne({github})
        if(project){
            res.status(401).json("Project Already exist")
        }
        else{
            const newProject = new projects({title,language,github,website,overview,projectImg,userId})
            await newProject.save()
            res.status(200).json(newProject)
        }

    }
    catch(err){
       res.status(406).json(err)
        
    }
    
}
//get Home page Projects
exports.getHomeProjects=async(req,res)=>{
   try{
    const response=await projects.find().limit(3)
    res.status(200).json(response)
   }
   catch(err){
    res.status(406).json(err)
     
 }
}


//Get a Single User PROJECT
exports.getUserProject=async(req,res)=>{
    const userId=req.payload

    try{
        const project = await projects.find({userId})
         res.status(200).json(project)
        }
       
    catch(err){
       res.status(406).json(err) 
    }

}


//Get All Users PROJECTS
exports.getAllUserProject=async(req,res)=>{

        try{
            const response = await projects.find()
            res.status(200).json(response)
        }

        catch(err){
            res.status(406).json(err)
         }
}

exports.editProjectAPI = async(req,res)=>{
    console.log("Inside edit project API");

    const {title,language,github,website,overview,projectImg}=req.body
    const updateImg =req.file?req.file.filename : projectImg //from multermiddleware
    const userId = req.payload//from jwt middleware
    const {projectId}=req.params
    console.log(updateImg);
    console.log(title,language,github,website,overview,userId);
    
    

    try{

       const project = await projects.findByIdAndUpdate(
        {_id:projectId},
        {
            title:title,
            language:language,
            github:github,
            website:website,
            overview:overview,
            projectImg:updateImg,
        }
       )
       await project.save()
       res.status(200).json(project)

    }
    catch(err){
       res.status(406).json(err)
        
    }
    
}

exports.deleteProjectAPI=async(req,res)=>{
    console.log("Inside delete API");
    const {projectId}=req.params
    console.log(projectId);

    try{
        const project = await projects.findByIdAndDelete({_id:projectId})
        res.status(200).json(project)

    }
    catch(err){
        res.status(406).json(err)
         
     }
    
    
}