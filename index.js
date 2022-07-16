//get environmental variables and globals
require('dotenv').config()

const express = require('express')
const app = express()
const methodOverride = require('method-override')



//Express Settings
app.set('views', __dirname + '/views')
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use(methodOverride('_method'))

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
