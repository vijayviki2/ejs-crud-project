const express = require('express')
require('dotenv').config()

const PORT = process.env.PORT
const app = express()

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
    console.log(`server started and live @ http://localhost:${PORT}`)
})