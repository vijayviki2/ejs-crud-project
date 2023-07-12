const userRoute = require('express').Router()
const userController = require('../controller/userController')

userRoute.get(`/`, userController.index)
userRoute.get(`/create`, userController.new)
userRoute.get(`/edit/:id`, userController.edit)

// create new user
userRoute.post(`/api/user/new`,userController.newUser)

userRoute.all(`**`, userController.pnf)

module.exports = userRoute

