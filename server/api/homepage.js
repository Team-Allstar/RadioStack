const router = require('express').Router()
const Category = require('../db/models/category')
const Product = require('../db/models/product')
module.exports = router

router.get('/', async (req, res, next) => {
  try {
    const categories = await Category.findAll({
      include: {
        model: Product
      }
    })
    res.json(categories)
  } catch (error) {
    next(error)
  }
})
