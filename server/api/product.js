const router = require('express').Router()
const {Product} = require('../db/models')
module.exports = router

router.get('/', async (req, res, next) => {
  try {
    const allProducts = await Product.findAll()
    res.json(allProducts)
  } catch (error) {
    res.status(500)
    next(error)
  }
})

router.get('/:productId', async (req, res, next) => {
  try {
    const productId = req.params.productId
    const singleProduct = await Product.findById(productId)
    res.status(200)res.json(singleProduct)
  } catch (error) {
    res.status(404)
    next(error)
  }
})
