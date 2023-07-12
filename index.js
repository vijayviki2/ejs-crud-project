const express = require('express')
require('dotenv').config()

// import connectDb method
const connectDb  =  require('./db/connect')


const PORT = process.env.PORT
const app = express()

app.use(express.static('./view'))

// body praser middleware config
app.use(express.urlencoded({ extended: true}))
app.use(express.json())

//ejs settings
app.set('view engine','ejs')
app.set('views', './view')

//defaukt
app.use(`/`, require('./route/userRoute'))

//server listen
app.listen(PORT,  () =>{
    connectDb()
    console.log(`server started and live @ http://localhost:${PORT}`)
})