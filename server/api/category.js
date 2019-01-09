const router = require('express').Router()
const Category = require('../db/models/category')
const Product = require('../db/models/product')
module.exports = router

router.get('/', async (req, res, next) => {
  try {
    const categories = await Category.findAll()
    res.json(categories)
  } catch (error) {
    next(error)
  }
})

router.get('/:categoryId', async (req, res, next) => {
  try {
    const categoryId = req.params.categoryId
    const category = await Category.findById({
      categoryId,
      include: {model: Product}
    })
    res.json(category)
  } catch (error) {
    res.status(404)
    next(error)
  }
})
