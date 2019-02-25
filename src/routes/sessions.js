const express = require('express')
const router = express.Router()
// const sessionsController = require('../controllers/sessions')
const db = require('../../db')

// get all sessions
// working
router.get('/', function(req, res, next){
  return (
    db('sessions')
    .then(function (data) {
      res.send(data)
    })
  )
})

// get by request id
// working
router.get('/:id', function(req, res, next){
  let id = req.params.id
  return (
    db('sessions')
    .where({
      request_id: id 
    })
    .then(function (data) {
      res.send(data)
    })
  )
})

//working
// updates session status
router.put('/:id', function(req, res, next){
  let id = req.params.id
  let status = req.body.session_status
  console.log(id, status)
  return db('sessions')
    .where({
      request_id: id 
    })
    .update({
      session_status: status
    }).returning('*')
    .then(function (data) {
      res.send(data)
  })
})

// created new session
router.post('/', function(req, res, next){
  let { request_id, queue_id } = req.body
  return db('sessions')
    .insert({
      request_id: request_id,
      queue_id: queue_id,
      session_status: "started"
    }).returning('*')
    .then(function (data) {
      res.send(data)
    })
})


module.exports = router