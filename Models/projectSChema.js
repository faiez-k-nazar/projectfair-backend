const mongoose = require('mongoose')

const projectSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    language:{
        type:String,
        required:true
    },
    github:{
        type:String,
    },
    overview:{
        type:String,
    },
    projectImg:{
        type:String,
    },
    userId:{
        type:String,
    }

})

//3 Model creation / exact same as mongoDB Collection
const projects = mongoose.model('projects',projectSchema)
 
module.exports=projects