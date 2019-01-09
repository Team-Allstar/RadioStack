const router = require('express').Router()
const Category = require('../db/models/category')
const Product = require('../db/models/product')
module.exports = router

router.get('/', async (req, res, next) => {
  try {
    const allCategories = await Category.findAll()
    res.json(allCategories)
  } catch (error) {
    next(error)
  }
})

router.get('/:categoryId', async (req, res, next) => {
  try {
    const categoryId = req.params.categoryId
    const category = await Product.findAll({
      where: {
        CategoryId: categoryId
      }
    })
    res.json(category)
  } catch (error) {
    res.status(404)
    next(error)
  }
})
