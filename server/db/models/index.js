const User = require('./user')
const Product = require('./product')
const Category = require('./category')
const OrderedProduct = require('./ordered-products')
const Order = require('./order')

/**
 * If we had any associations to make, this would be a great place to put them!
 * ex. if we had another model called BlogPost, we might say:
 *
 *    BlogPost.belongsTo(User)
 */

Order.belongsTo(User)
User.hasMany(Order)

Product.belongsTo(Category)

// Product.belongsToMany(Order, {through: OrderedProduct});
// Order.belongsToMany(Order, {through: OrderedProduct});

Product.hasMany(OrderedProduct)
OrderedProduct.belongsTo(Product)

User.hasMany(OrderedProduct)
Order.hasMany(OrderedProduct)

/**
 * We'll export all of our models here, so that any time a module needs a model,
 * we can just require it from 'db/models'
 * for example, we can say: const {User} = require('../db/models')
 * instead of: const User = require('../db/models/user')
 */
module.exports = {
  User,
  Product,
  Order,
  OrderedProduct,
  Category
}
