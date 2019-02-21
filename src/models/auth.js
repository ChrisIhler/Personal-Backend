const bcrypt = require('bcrypt')
const userModel = require('./users')

function login(email, password){
  let user
  return userModel.getOneByEmail(email)
  .then(function(data){
    if(!data) throw { status: 400, message: 'Bad Request Model-Auth 1'}
    user = data
    console.log(user)
    return bcrypt.compareSync(password, data.password)
  })
  .then(function(status){
    if(!status) throw { status: 401, message: 'Unauthorized Model-Auth 2'}
    delete user.password
    return user
  })
}

module.exports = {
  login
}