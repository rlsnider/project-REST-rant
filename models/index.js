require('dotenv').config()
const mongoose = require('mongoose')

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true, 
  useUnifiedTopology: true

}
)  .then(() => { console.log('connected to mongo: ', process.env.MONGO_URI) })
.catch(e => console.error(e));



module.exports.Place = require('./places')
module.exports.Comment = require('./comment')






