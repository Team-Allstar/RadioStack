const Sequelize = require('sequelize')
const db = require('../db')

const Product = db.define('Product', {
  productName: {
    type: Sequelize.STRING,
    allowNull: false,
    notEmpty: true
  },
  productDescription: {
    type: Sequelize.TEXT,
    allowNull: false,
    notEmpty: true
  },
  productInventory: {
    type: Sequelize.INTEGER,
    allowNull: false,
    notEmpty: true,
    defaultValue: 0
  },
  currentPrice: {
    type: Sequelize.DECIMAL(9, 5),
    defaultValue: 0
  },
  featured: {
    type: Sequelize.BOOLEAN,
    defaultValue: false
  },
  imageUrl: {
    type: Sequelize.STRING,
    defaultValue: '/images/products/default-product.jpg'
  }
})

module.exports = Product

/**
 * instanceMethods
 */

/**
 * classMethods
 */

/**
 * hooks
 */
