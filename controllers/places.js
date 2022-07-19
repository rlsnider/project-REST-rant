const router = require('express').Router()
const places = require('../models/places.js')


//This will show a list of all "places"
router.get('/', (req, res) => {
  res.send('GET /places stub')
 })

//get places new
router.get('/new', (req,res)=> {
    res.send('places/new')
})


// show route
router.get('/:id', (req, res)=>{
    console.log('client just hit show route')
    res.send('GET /places/:id stub')
})
   // let id = Number(req.params.id)
   // if (isNaN(id)) {
    //    res.render('error404')
//     }
//     else if(!places[id]){
//         res.render('error404')
//     }
//     else{
//     res.render('places/show', { place: places[id], id })
//     }
// })

//post route
router.post('/', (req, res) => {
    res.send('Post /places stub')
   // if (!req.body.pic) {
      // Default image if one is not provided
    //   req.body.pic = 'http://placekitten.com/400/400'
    // }
    // if (!req.body.city) {
    //   req.body.city = 'Anytown'
    // }
    // if (!req.body.state) {
    //   req.body.state = 'USA'
    // }
    // places.push(req.body)
    // res.redirect('/places')
  })

  //edit route
  router.get('/:id/edit', (req, res) => {
    res.send('GET edit form stub')
    // let id = Number(req.params.id)
    // if (isNaN(id)) {
    //     res.render('error404')
    // }
    // else if (!places[id]) {
    //     res.render('error404')
    // }
    // else {
    //   let data ={
    //   place: places[id], 
    //   id:id
    //   }
    //   res.render('places/edit', data)   
    // }
  })
  //PUT route
  router.put('/:id', (req, res) => {
    res.send('PUT /places/:id stub')
  //   let id = Number(req.params.id)
  //   if (isNaN(id)) {
  //       res.render('error404')
  //   }
  //   else if (!places[id]) {
  //       res.render('error404')
  //   }
  //   else {
  //       // Dig into req.body and make sure data is valid
  //       if (!req.body.pic) {
  //           // Default image if one is not provided
  //           req.body.pic = 'http://placekitten.com/400/400'
  //       }
  //       if (!req.body.city) {
  //           req.body.city = 'Anytown'
  //       }
  //       if (!req.body.state) {
  //           req.body.state = 'USA'
  //       }
  
  //       // Save the new data into places[id]
  //       places[id] = req.body
  //       res.redirect(`/places/${req.params.id}`)
  //   }
   })
  
  
  
  //delete route
  router.delete('/:id', (req, res)=>{
   res.send ('DELETE /places/:id stub')
  })
  
  //rant route
  router.delete('/:id/rant/:rantId',(req,res)=>{
    res.send('GET /places/:id/rant/:rantId stub')
  })
 module.exports = router
