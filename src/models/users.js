const db = require('../../db')
const bcrypt = require('bcrypt')

function getOneByEmail(email){
  return (
    db('users')
    .where({ email })
    .first()
  )
}

function getAllUsers(limit){
  return limit ? db('users').slice(0, limit) : db('users')
}

function getUser(username){
///////////// NEED TO UPDATE THIS CODE ////////////////

}

function deleteUser(){
///////////// NEED TO UPDATE THIS CODE ////////////////

}

function newUser(email, password){
///////////// NEED TO UPDATE THIS CODE ////////////////
  return getOneByEmail(email)
    .then(function(data){
      if(data) throw { status: 400, message:'User already exists'}
      return bcrypt.hash(password, 10)
    })
    .then(function(hashedPassword){
      return (
        db('users')
        .insert({ email, password: hashedPassword })
        .returning('*')
      )
    })
    .then(function([ data ]){
      delete data.password
      return data
    })
}


function updateUser(){
///////////// NEED TO UPDATE THIS CODE ////////////////

}

module.exports = { getOneByEmail, getAllUsers, getUser, deleteUser, newUser, updateUser }
