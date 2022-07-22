const router = require('express').Router()

router.get('/', (req, res) => {
  let places = [{
    name: 'H-Thai-ML',
    city: 'Seattle',
    state: 'WA',
    cuisines: 'Thai, Pan-Asian',
    pic: '/images/pexels-andrey-grushnikov-707670.jpg'
  }, {
    name: 'Coding Cat Cafe',
    city: 'Phoenix',
    state: 'AZ',
    cuisines: 'Coffee, Bakery',
    pic: '/images/coffee-g3ddd1dba3_1920.jpg'
  }]
  
    res.render('places/index', { places })
})

//New 
router.get('/new', (req, res)=>{
  res.render('places/new')
})
//Post 
router.post('/', (req, res)=>{
  console.log(req.body)
  res.send('POST /places')
})
module.exports = router
