//1
const express = require('express')


//3 import userControl
const userController=require('../Controllers/UserController')
const jwtMiddleware = require('../Middlewares/jwtMiddleWare')
const projectController = require('../Controllers/projectController')
const multerMiddleware = require('../Middlewares/multerMiddleware')


//2 create router
const router = express.Router()

router.post('/api/register',userController.registerAPI)

router.post('/api/login',userController.loginAPI)

router.post('/api/addProject',jwtMiddleware,multerMiddleware.single('projectImg'),projectController.addProjectAPI)

router.get('/api/getAllUserProjects',jwtMiddleware,projectController.getAllUserProject)

router.get('/api/getUserProjects',jwtMiddleware,projectController.getUserProject)

router.get('/api/getHomeProjects',projectController.getHomeProjects)

// edit

router.put('/api/editProject/:projectId',jwtMiddleware,multerMiddleware.single('projectImg'),projectController.editProjectAPI)

router.delete('/api/deleteProject/:projectId',jwtMiddleware,projectController.deleteProjectAPI)


module.exports=router


