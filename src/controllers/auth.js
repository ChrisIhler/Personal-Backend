const authModel = require('../models/auth')
const jwt = require('jsonwebtoken')

function isAuthenticated(req, res, next){
  if(!req.headers.authorization){
    return next({ status: 401, message: 'Unauthorized ctrl-auth 1'})
  }
  const [scheme, credentials] = req.headers.authorization.split(' ')
  jwt.verify(credentials, process.env.JWT_SECRET, (err, payload) => {
    if(err){
      return next({ status: 401, message: 'Unautorized ctrl-auth 2'})
    }
    req.claim = payload
    next()
  })
}

function getAuthStatus(req, res, next){
  res.status(200).send({...req.claim})
}

function login(req, res, next){
  if(!req.body.email){
    return next({status: 400, message: 'Bad request ctrl-auth 3'})
  }

  if(!req.body.password){
    return next({ status: 400, message: 'Bad request ctrl-auth 4'})
  }

  authModel.login(req.body.email, req.body.password)
  .then(function({id, email}){
    const token = jwt.sign({id, email }, process.env.JWT_SECRET)
    return res.status(200).send({ token })
    })
  .catch(next)

}

module.exports = {

  isAuthenticated,
  getAuthStatus,
  login

}