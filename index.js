//1 Load .env file
require('dotenv').config()



//2  import express
const express = require('express')

//6 import cors
const cors = require('cors')

//8 import db
const db=require('./DB/connection')

//9 import router
const router = require('./Routes/router')
// const applicationMiddleware = require('./Middlewares/ApplicationMiddleWare')

//3 create an application 
const pfServer = express()

//7 middleware configuration
pfServer.use(cors())
pfServer.use(express.json())
// pfServer.use(applicationMiddleware)
pfServer.use(router)

//export image to frontend
pfServer.use('/uploads',express.static('./uploads'))

// 4 define port
const PORT = 3000 || process.env.PORT

//5 run
pfServer.listen(PORT,()=>{
    console.log('ProjectFair Server started at PORT : '+ PORT);
    
})

pfServer.get('/',(req,res)=>{
    res.send('Welcome to PFServer')
})

