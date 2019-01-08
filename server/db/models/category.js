const Sequelize = require('sequelize')
const db = require('../db')

const Category = db.define('category', {
  categoryName: {
    type: Sequelize.STRING,
    allowNull: false,
    notEmpty: true
  }
})

module.exports = Category

/**
 * instanceMethods
 */

/**
 * classMethods
 */

/**
 * hooks
 */
