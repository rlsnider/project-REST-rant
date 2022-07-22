const router = require('express').Router()
const places = require('../models/places.js')

router.get('/', (req, res) => {

  
    res.render('places/index', { places })
})

//New 
router.get('/new', (req, res)=>{
  res.render('places/new')
})
//Post 
router.post('/', (req, res) => {
  console.log(req.body)
  if (!req.body.pic) {
    // Default image if one is not provided
    req.body.pic ="/images/anantha-krishnan-6Ra0Xe90qac-unsplash.jpg"
  }
  if (!req.body.city) {
    req.body.city = 'Anytown'
  }
  if (!req.body.state) {
    req.body.state = 'USA'
  }
  places.push(req.body)
  res.redirect('/places')
})

module.exports = router
