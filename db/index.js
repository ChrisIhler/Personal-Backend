const env = process.env.NODE_ENV || 'development'
const config = require('../knexfile')[env]
const connection = require('knex')(config)

module.exports = connection

exports.TABLES =  {  
    USERS: 'users',
    REQUESTS: 'requests',
    OFFERS: 'offers',
    QUEUES: 'queues'
};