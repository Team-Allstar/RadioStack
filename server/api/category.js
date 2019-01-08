const router = require('express').Router()
const {Category, Product} = require('../db/models')
module.exports = router

router.get('/:categoryId', async (req, res, next) => {
  try {
    const categoryId = req.params.categoryId
    const category = await Category.findById({
      categoryId,
      include: {model: Product}
    })
    res.json(category)
  } catch (error) {
    next(error)
  }
})
