const router = require('express').Router()

//This will show a list of all "places"
router.get('/', (req, res) => {
   res.render('GET /places')
})

//Get /places
router.get('/', (req, res)=>{
   let places = [{
    name: 'H-Thai-ML',
    city: 'Seattle', 
    state: 'WA',
    cuisines: 'Thai, Pan-Asian',
    pic: 'http://placekitten.com/250/250'
}, {
    name: 'Coding Cat Cafe',
    city: 'Phoenix',
    state: 'AZ',
    cuisines: 'Coffee, Bakery',
    pic: 'http//placekitten.com/250/250'
}]
    res.render('places/index', { places })
})

module.exports = router
