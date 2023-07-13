const userRoute = require('express').Router()
const userController = require('../controller/userController')

// route.request(path, controller)

/* all other views (render controller) accessed onlyby get request*/
userRoute.get(`/`, userController.index)
userRoute.get(`/create`, userController.new)
userRoute.get(`/edit/:id`, userController.edit)

// create new user - post api route
userRoute.post(`/api/user/new`,userController.newUser)

// to read stored user data -> get api route
userRoute.get('/api/user/all', userController.readUser)

//request method -> all -> only assigned to default route
userRoute.all(`**`, userController.pnf)

module.exports = userRoute

