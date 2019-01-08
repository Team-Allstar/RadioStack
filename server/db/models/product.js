const Sequelize = require('sequelize')
const db = require('../db')

const Product = db.define('product', {
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
    type: Sequelize.DECIMAL(9, 6),
    defaultValue: 0
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
