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

//Show
router.get('/:id', (req, res) => {
  let id = Number(req.params.id)
  if (isNaN(id)) {
    res.render('error404')
  }
  else if (!places[id]) {
    res.render('error404')
  }
  else {
    res.render('places/show', { place: places[id], id })

  }
})
//edit
router.get('/:id/edit', (req, res)=>{
let id= Number(req.params.id)
if(isNaN(id)){
  res.render('error404')
}
else if(!places[id]){
  res.render('error404')
}
else{
  let data = {
    place:places[id], 
    id:id
  }
  res.render('places/edit', data)
}
})
//Put route//update
router.put('/:id', (req, res)=>{
  let id = Number(req.params.id)
if(isNaN(id)){
  res.render('error404')
}
else if (!places[id]){
  res.render('error404')
}
else{
  //Dig into req.body and make sure data is valid
  if(!req.body.pic){
    //defalult image if one is not provided
    req.body.pic = 'http://placekitten.com/400/400'
  }
  if(!req.body.city){
    req.body.city = 'Anytown'
  }
  if(!req.body.state){
    req.body.state ='USA'
  }
  //Save the new data into places[id]
  places[id]=req.body
  res.redirect('/places/${req.params.id}')
}
})
//DELETE route 
router.delete('/:id', (req, res)=>{
  let id = Number(req.params.id)
  if(isNaN(id)){
    res.render('error404')
  }
  else if (!places[id]){
    res.render('error404')
  }
  else{
    places.splice(id, 1)
    res.redirect('/places')
  }
})


module.exports = router
