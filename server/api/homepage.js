const router = require('express').Router()
const Category = require('../db/models/category')
const Product = require('../db/models/product')
module.exports = router

/*
  Maybed needed maybe not
*/

// router.get('/', async (req, res, next) => {
//   try {
//     const categories = await Product.findAll({
//       include: {
//         model: Category
//       }
//     })
//     res.json(categories)
//   } catch (error) {
//     next(error)
//   }
// })
