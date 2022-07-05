//require needed modules
const express = require('express')
//get environmental variables
require('dotenv').config()
//initialize the app object
const app = express()
//create homepage routes
app.get('/', function (req, res){
    console.log('client just hit the route')
    res.send('Hello World')
})

//Listen for connections.
app.listen(process.env.PORT, ()=>{
    console.log('I am awake!')
})
