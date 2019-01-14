const router = require('express').Router()
const OrderedProduct = require('../db/models/ordered-products')
const Order = require('../db/models/order')
const Product = require('../db/models/product')

module.exports = router

router.get('/', async (req, res, next) => {
  try {
    const data = await OrderedProduct.findAll()
    // const data = response.data
    res.json(data)
  } catch (error) {
    next(err)
  }
})

router.post('/:userId/:productId/:quantity', async (req, res, next) => {
  try {
    const userId = req.params.userId
    const productId = req.params.productId
    const quantity = req.params.quantity

    const currentCart = await Order.findOrCreate({
      where: {
        UserId: userId,
        isCart: true
      }
    })

    const currentProduct = await OrderedProduct.findOne({
      where: {
        OrderId: currentCart[0].dataValues.id,
        ProductId: productId
      }
    })

    if (currentProduct) {
      currentProduct.update({
        quantity: Number(currentProduct.dataValues.quantity) + Number(quantity)
      })
    } else {
      await OrderedProduct.create({
        UserId: userId,
        ProductId: productId,
        OrderId: currentCart[0].dataValues.id,
        quantity
      })
    }

    res.status(200).json(currentProduct)
  } catch (error) {
    next(error)
  }
})
