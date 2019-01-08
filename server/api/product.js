const router = require('express').Router()
const {Product} = require('../db/models')
module.exports = router

router.get('/:productId', async (req, res, next) => {
  try {
    const productId = req.params.productId
    const singleProduct = await Product.findById(productId)
    res.json(singleProduct)
  } catch (error) {
    next(error)
  }
})
