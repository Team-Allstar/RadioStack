const router = require('express').Router()
const Product = require('../db/models/product')
const Category = require('../db/models/category')
module.exports = router

router.get('/', async (req, res, next) => {
  try {
    const allProducts = await Product.findAll({
      include: {
        model: Category
      }
    })
    res.json(allProducts)
  } catch (error) {
    next(error)
  }
})

router.get('/featured', async (req, res, next) => {
  try {
    const allProducts = await Product.findAll({
      where: {
        featured: true
      },
      include: {
        model: Category
      }
    })
    res.json(allProducts)
  } catch (error) {
    next(error)
  }
})

router.get('/:productId', async (req, res, next) => {
  try {
    const productId = req.params.productId
    const singleProduct = await Product.findOne({
      where: {
        id: productId
      },
      include: {
        model: Category
      }
    })
    res.json(singleProduct)
  } catch (error) {
    res.status(404)
    next(error)
  }
})
