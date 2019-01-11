const router = require('express').Router()
const OrderedProduct = require('../db/models/ordered-products')
const Order = require('../db/models/order')
const Product = require('../db/models/product')

module.exports = router

router.get('/:userId', async (req, res, next) => {
  try {
    /* 
            need to change userId to req.user.id
        */
    const userId = req.params.userId
    const orderHistory = await Order.findAll({
      where: {
        isCart: false,
        UserId: userId
      },
      include: {
        model: OrderedProduct,
        include: {
          model: Product
        }
      }
    })
    res.json(orderHistory)
  } catch (error) {
    next(error)
  }
})
