const router = require('express').Router()
const db = require('../models')

//list places page
router.get('/', (req, res) => {
    db.Place.find()
    .then((places) => {
      res.render('places/index', { places })
    })
    .catch(err => {
      console.log(err) 
      res.render('error404')
    })
})
//create a new restraunt
router.post('/', (req, res) => {
  db.Place.create(req.body)
  .then(() => {
      res.redirect('/places')
  })
  .catch(err => {
      if(err && err.name == 'ValidationError') {
        let message = 'Validation Error: '
        for (var field in err.errors) {
          message += `${field} was ${err.errors[field].value}. `
          message += `${err.errors[field].message}`
        }
        console.log('Validation error message', message)
        res.render('places/new', { message })
      }
      else{
        res.render('error404')
      }
  })
})

// get the form to add a new place
router.get('/new', (req, res) => {
  res.render('places/new')
})
//Route to the Show(individual restaurants page)
//populate seeder comments
router.get('/:id', (req, res) => {
  db.Place.findById(req.params.id)
  //goes to seeder comments and pulls them into the Show page
  .populate('comments')
  .then(place => {
    //console.log the comments from the seeder file
    console.log(place.comments)
    //to to places/show, {place}being the current place that we are working with
    res.render('places/show', { place })
  })
  .catch(err => {
    console.log('err', err)
    res.render('error404')
  })
})

router.put('/:id', (req, res) => {
  db.Place.findByIdAndUpdate(req.params.id, req.body)
  .then(()=> { 
    res.redirect(`/places/${req.params.id}`)
  })
  .catch (err => {
    console.log('err', err)
    res.render('error404')
     })
  })
//Edit route
router.get('/:id/edit', (req, res) => {
  db.Place.findById(req.params.id)
  .then(()=> {
    res.render('/places/edit')
  })
  .catch(err => {
    console.log('err', err)
      res.render('error404')
    })
})
 
//update route
router.put('/:id', (req, res)=> {
  let id=Number(req.params.id)
  if(isNaN(id)){
    res.render('error404')
  }
  else if(!places[id]){
    res.render('error404')
  }
  else {
    if(!req.body.pic) {
      req.body.pic="http//placekitten.com/400/400"
    }
    if(!req.body.city){
      req.body.city = 'Anytown'
    }
    if(!req.body.state){
      req.body.state = 'USA'
    }
    places[id]=req.body
    res.redirect(`/places/${req.params.id}`)
  }
})

router.delete('/:id', (req, res)=> {
  let id = Number(req.params.id)
  if(isNaN(id)){
    res.render('error404')
  }
  else if(!places[id]) {
    res.render('error404')
  }
  else{
    places.splice(id, 1)
    res.redirect('/places')
  }
})

router.delete('/:id/edit', (req, res) => {
  db.Place.findById(req.params.id)
  .then(place =>{
    res.render('places/edit', { place })
})
  .catch(err => {
    res.render('error404')
   })
})


//adding a new comment
router.post('./:id/comment', (req, res) => {
  console.log('post comment', req.body)
  if(req.body.author === ' ') { req.body.author = undefined }
  req.body.rant = req.body.rant ? true : false
  db.Place. findById(req.params.id)
    .then(place => {
      db.Comment.create(req.body)
      .then(comment => {
        place.comments.push(comment.id)
        place.save()
          .then(()=> { 
             res.redirect(`/places/${req.params.id}`) 
          })
          .catch(err => {
            res.render('error404')
          })
      })
      .catch(err => {
          res.render('error404')
      })
    })
  .catch(err => {
    res.render('error404')
  })
})
  

router.delete('/:id/comment/:commentId', (req, res) => {
  db.Comment.findByIdAndDelete(req.params.commentId)
    .then(()=> {
      console.log('Success, Deleted')
      res.redirect(`/places/${req.params.id}`)
    })
    .catch(err => {
      console.log('err', err)
      res.render('error404')
    })
})

module.exports = router



