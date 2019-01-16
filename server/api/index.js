const path = require('path')
const router = require('express').Router()
module.exports = router

router.get('/', (req, res, next) => {
  res.sendFile(path.join(__dirname, '../..', 'public/index.html'))
})

router.use('/users', require('./users'))
router.use('/homepage', require('./homepage'))
router.use('/category', require('./category'))
router.use('/products', require('./products'))
router.use('/cart', require('./cart'))
router.use('/order-history', require('./orderHistory'))
router.use('/ordered-products', require('./orderedProducts'))

router.use((req, res, next) => {
  const error = new Error('Not Found')
  error.status = 404
  next(error)
})
