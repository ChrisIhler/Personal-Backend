const express = require('express')
const router = express.Router()
const offersController = require('../controllers/offers')

router.get('/', offersController.getAllOffers)
router.put('/:id', offersController.updateOfferStatus)

module.exports = router