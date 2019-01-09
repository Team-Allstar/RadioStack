const router = require('express').Router()
module.exports = router

router.use('/users', require('./users'))
router.use('/homepage', require('./homepage'))
router.use('/category', require('./category'))
router.use('/products', require('./products'))
router.use('/cart', require('./cart'))
router.use('/orderHistory', require('./orderHistory'))

router.use((req, res, next) => {
  const error = new Error('Not Found')
  error.status = 404
  next(error)
})
