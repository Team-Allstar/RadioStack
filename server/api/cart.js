const router = require('express').Router()
const Order = require('../db/models/order')
const OrderedProduct = require('../db/models/ordered-products')
const Product = require('../db/models/product')
module.exports = router

router.get('/:userId', async (req, res, next) => {
  try {
    const userId = req.params.userId
    const cart = await Order.findOrCreate({
      where: {
        UserId: userId,
        isCart: true
      },
      include: {
        model: OrderedProduct,
        include: {
          model: Product
        }
      }
    })
    res.status(200).json(cart)
  } catch (error) {
    next(error)
  }
})

router.put('/checkout/:cartId', async (req, res, next) => {
  const cartId = req.params.cartId
  try {
    const orderedProducts = await OrderedProduct.findAll({
      where: {
        OrderId: cartId
      },
      include: {
        model: Product
      }
    })

    orderedProducts.map(item => {
      item.update({
        pricePaid: item.Product.dataValues.currentPrice
      })
    })

    const currentCart = await Order.findOne({
      where: {
        id: cartId,
        UserId: req.user.id
      }
    })
    const checkedOutCart = await currentCart.update({
      isCart: false
    })
    res.json(orderedProducts[0])
  } catch (error) {
    next(error)
  }
})
