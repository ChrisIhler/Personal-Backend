const db = require('../../db')

function getQueuesByUser(offerId) {
    return db('queues as q')
        .leftJoin('requests as r', function() {
            this.on('q.request_id', '=', 'r.id')
        })
        .leftJoin('users as u1', function() {
            this.on('r.user_id', '=', 'u1.id')
        })
        .leftJoin('offers as o', function() {
            this.on('q.offer_id', '=', 'o.id')
        })
        .leftJoin('users as u2', function() {
            this.on('o.user_id', '=', 'u2.id')
        })
        .select('*',
            'u2.first_name as o_first_name',
            'u2.last_name as o_last_name',
            'u2.email as o_email',
            'q.status as queue_status',
            'o.status as offer_status')
        .where('q.offer_id', offerId)
        .then(function(results) {
            return results.map(result => {
                return {
                    id: result.id,
                    offer_id: result.offer_id,
                    request_id: result.request_id,
                    status: result.queue_status,
                    created_at: result.created_at,
                    request: {
                        description: result.description,
                        first_name: result.first_name,
                        last_name: result.last_name,
                        email: result.email
                    },
                    offer: {
                        first_name: result.o_first_name,
                        last_name: result.o_last_name,
                        email: result.o_email,
                        status: result.offer_status
                    }
                }
            })
        });
}

function updateQueueStatus(id, status) {
    return db('queues').where('id', id).update('status', status)
}

module.exports = { getQueuesByUser, updateQueueStatus }
