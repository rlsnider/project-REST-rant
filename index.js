//require needed modules
const express = require('express')

//initialize the app object
const app = express()

//get environmental variables
require('dotenv').config()

//define the view engine 
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())
app.use(express.static('public'))

//link to controllers/places
app.use('/places', require('./controllers/places'))

//create homepage route
app.get('/',  (req, res)=>{
    console.log('client just hit the route')
    res.render('home')
})
//create default route to "page not found"
app.get('*', (req, res)=>{
    res.render('error404')
})

//Listen for connections.
app.listen(process.env.PORT, ()=>{
    console.log('I am awake!')
})
