const Sequelize = require('sequelize')
const db = require('../db')

const Category = db.define('Category', {
  categoryName: {
    type: Sequelize.STRING,
    allowNull: false,
    notEmpty: true
  },
  imageUrl: {
    type: Sequelize.STRING,
    defaultValue: '/images/categories/default-category.jpg'
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
