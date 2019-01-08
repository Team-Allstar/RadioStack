const router = require('express').Router()
const {Order} = require('../db/models')
module.exports = router

router.get('/', async (req, res, next) => {
  try {
    let cart = await Order.findOrCreate({
      where: {
        userId: req.body.Id || req.session.Id,
        isCart: true
      }
    })
    res.json(cart)
  } catch (error) {
    next(error)
  }
})
