const Sequelize = require('sequelize')
const db = require('../db')

const OrderedProduct = db.define('orderedproduct', {
  quantity: {
    type: Sequelize.INTEGER,
    allowNull: false,
    notEmpty: true,
    validate: {min: 1}
  },
  pricePaid: {
    type: Sequelize.DECIMAL(9, 6),
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