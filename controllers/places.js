const router = require('express').Router()

//get places new
router.get('/new', (req,res)=> {
    res.render('places/new.jsx')
})

//This will show a list of all "places"
// router.get('/', (req, res) => {
//    res.render('places/index.jsx', { places })
// })

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
    pic:'public\images\Coding-cat-cafe'
}]
    res.render('places/index.jsx', { places })
})
//Post /places router
router.post('/', (req, res)=> {
    console.log(req.body)
    res.send('POST /places')
})
module.exports = router
