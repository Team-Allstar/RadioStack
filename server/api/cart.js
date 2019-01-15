const router = require('express').Router()
const Order = require('../db/models/order')
const User = require('../db/models/user')
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

router.post('/checkout/guest/', async (req, res, next) => {
  try {
    const cartObject = req.body.cart
    const cartStringArr = Object.keys(cartObject)

    const newUser = await User.create({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      password: req.body.password
    })

    const userId = newUser.id

    const newOrder = await Order.create({
      UserId: userId,
      isCart: false
    })

    const orderId = newOrder.id

    cartStringArr.map(key => {
      OrderedProduct.create({
        quantity: JSON.parse(cartObject[key]).quantity,
        pricePaid: JSON.parse(cartObject[key]).productPrice,
        ProductId: JSON.parse(cartObject[key]).productId,
        UserId: userId,
        OrderId: orderId
      })
    })

    res.json(newUser)
  } catch (error) {
    next(error)
  }
})
