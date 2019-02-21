const queuesModel = require('../models/queues')

function getQueuesByUser(req, res, next){
    queuesModel.getQueuesByUser(req.params.offerId)
        .then(function(result){
            if (!result) {
                return next({ status: 404, message: 'No queues found'})
            }
            res.status(200).send(result)
        })
        .catch(function(e){
            return next({ status: e.status, message: e.message})
        })
}

function updateQueueStatus(req, res, next){
    const {status} = req.body
    queuesModel.updateQueueStatus(req.params.id, status)
        .then(function(result){
            if (!result) {
                return next({ status: 404, message: result.message})
            }
            return res.status(200).send({ result })
        })
        .catch(function(e){
            return next({ status: e.status, message: e.message})
        })
}

module.exports = { getQueuesByUser, updateQueueStatus }
