const Sequelize = require('sequelize')
const db = require('../db')

const OrderedProduct = db.define('OrderedProduct', {
  quantity: {
    type: Sequelize.INTEGER,
    allowNull: false,
    notEmpty: true,
    validate: {min: 1}
  },
  pricePaid: {
    type: Sequelize.INTEGER,
    defaultValue: null
  }
})

module.exports = OrderedProduct

/**
 * instanceMethods
 */

/**
 * classMethods
 */

/**
 * hooks
 */
