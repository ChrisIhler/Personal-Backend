const db = require('../../db')

function getAllOffers(){
    return db.select('*').from('offers').leftJoin('users', 'users.id', 'offers.user_id')
}

function updateOfferStatus(id, status) {
    return db('offers').where('id', id).update('status', status)
}

module.exports = { getAllOffers, updateOfferStatus}
