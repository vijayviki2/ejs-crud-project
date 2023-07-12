const userRoute = require('express').Router()
const userController = require('../controller/userController')

userRoute.get(`/`, userController.index)
userRoute.get(`/create`, userController.new)
userRoute.get(`/edit/:id`, userController.edit)
userRoute.all(`**`, userController.pnf)

// create new user
userRoute.post(`/user/new`,userController.newUser)

userRoute.all(`**`, userController.pnf)

module.exports = userRoute

