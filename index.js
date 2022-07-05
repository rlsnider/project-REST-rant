//require needed modules
const express = require('express')
//get environmental variables
require('dotenv').config()
//initialize the app object
const app = express()
//link to controllers/places
app.use('/places', require('./controllers/places'))

//create homepage route
app.get('/', function (req, res){
    console.log('client just hit the route')
    res.send('Hello World')
})
//create default route to "page not found"
app.get('*', (req, res)=>{
    res.status(404).send('<h1>404 page</h1>')
})

//Listen for connections.
app.listen(process.env.PORT, ()=>{
    console.log('I am awake!')
})
