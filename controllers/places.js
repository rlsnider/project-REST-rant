const router = require('express').Router()
//This will show a list of all "places"
router.get('/', (req, res) => {
    res.render('GET /places')
})

module.exports = router
