const offersModel = require('../models/offers')

function getAllOffers(req, res, next){
    offersModel.getAllOffers()
        .then(function(result){
            if (!result) {
                return next({ status: 404, message: 'No offers found'})
            }
            res.status(200).send(result)
        })
        .catch(function(e){
            return next({ status: e.status, message: e.message})
        })
}

function updateOfferStatus(req, res, next){
    console.log(req.body.status)
    const {status} = req.body
    offersModel.updateOfferStatus(req.params.id, status)
        .then(function(result){
            console.log(result)
            if (!result) {
                return next({ status: 404, message: result.message})
            }
            return res.status(200).send({ result })
        })
        .catch(function(e){
            return next({ status: e.status, message: e.message})
        })
}

module.exports = { getAllOffers, updateOfferStatus }
