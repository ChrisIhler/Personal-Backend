const express = require('express')
const app = express()
const port = process.env.PORT || 5000
const bodyParser = require('body-parser')
const morgan = require('morgan')
// ask about cors and requiring it for authorizations
const cors = require('cors')
const authContoller = require('./controllers/auth')

app.disable('x-powered-by')
app.use(cors())
app.use(bodyParser.json())
if (process.env.NODE_ENV === 'development') app.use(morgan('dev'))


if(process.env.NODE_ENV !== 'production'){
  require('dotenv').load()
}
/////////////////////////// CREATE ROUTER HERE ////////////////////
app.use('/users', require('./routes/users'))
app.use('/auth', require('./routes/auth'))
app.use('/offers', require('./routes/offers'))
app.use('/queues', require('./routes/queues'))

/////////////////////////// CREATE ROUTER HERE ////////////////////

app.use((err, req, res, next) => {
  // console.log(err)
  const status = err.status || 500
  res.status(status).json({ error: err, message: 'app.js' })
})

app.use((req, res, next) => {
  console.log(req.param)
  res.status(404).json({ error: { message: 'Not Found app.js' }})
})

const listener = () => console.log(`Listening on port ${port}!`)
app.listen(port, listener)