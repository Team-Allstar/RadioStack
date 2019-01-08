const Sequelize = require('sequelize')
const db = require('../db')

const Order = db.define('Order', {
  isCart: {
    type: Sequelize.BOOLEAN,
    defaultValue: true
  }
})

module.exports = Order

/**
 * instanceMethods
 */

/**
 * classMethods
 */

/**
 * hooks
 */
