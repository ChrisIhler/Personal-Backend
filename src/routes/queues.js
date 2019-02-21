const express = require('express')
const router = express.Router()
const queuesController = require('../controllers/queues')

router.get('/:offerId', queuesController.getQueuesByUser)
router.put('/:id', queuesController.updateQueueStatus)

module.exports = router