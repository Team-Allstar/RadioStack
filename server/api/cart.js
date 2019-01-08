const router = require('express').Router()
const {Order} = require('../db/models')
module.exports = router

router.get('/', async (req, res, next) => {
  try {
    let cart = await Order.findOrCreate({
      where: {
        userId: req.user.id || req.session.id,
        isCart: true
      }
    })
    res.status(200).res.json(cart)
  } catch (error) {
    next(error)
  }
})
