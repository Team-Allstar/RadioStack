const crypto = require('crypto')
const Sequelize = require('sequelize')
const db = require('../db')

const User = db.define('user', {
  firstName: {
    type: Sequelize.STRING,
    allowNull: false,
    notEmpty: true,
    hooks: {
      beforeValidate: function(input) {
        let nameArray = input.toLowerCase().split('')
        nameArray[0] = nameArray[0].toUpperCase()
        let correctedName = nameArray.join('')
        return correctedName
      }
    }
  },
  lastName: {
    type: Sequelize.STRING,
    allowNull: false,
    notEmpty: true,
    hooks: {
      beforeValidate: function(input) {
        let nameArray = input.toLowerCase().split('')
        nameArray[0] = nameArray[0].toUpperCase()
        let correctedName = nameArray.join('')
        return correctedName
      }
    }
  },
  streetAddress1: {
    type: Sequelize.STRING,
    allowNull: false,
    notEmpty: true
  },
  streetAddress2: {
    type: Sequelize.STRING
  },
  city: {
    type: Sequelize.STRING,
    allowNull: false,
    notEmpty: true
  },
  state: {
    type: Sequelize.STRING,
    allowNull: false,
    notEmpty: true
  },
  zipCode: {
    type: Sequelize.STRING,
    allowNull: false,
    notEmpty: true,
    validate: {min: 10000, max: 99999},
    hooks: {
      beforeValidate: function(input) {
        return Number(input)
      }
    }
  },
  phoneNumber: {
    type: Sequelize.STRING,
    allowNull: false,
    notEmpty: true,
    validate: {min: 1000000, max: 9999999},
    hooks: {
      beforeValidate: function(input) {
        return Number(
          input
            .split('')
            .filter(el => el !== '-')
            .filter(el => el !== '(')
            .filter(el => el !== ')')
            .filter(el => el !== ' ')
            .filter(el => el !== '.')
            .join('')
        )
      }
    }
  },
  email: {
    type: Sequelize.STRING,
    unique: true,
    allowNull: false,
    notEmpty: true,
    validate: {
      isEmail: true
    }
  },
  isAdmin: {
    type: Sequelize.BOOLEAN,
    defaultValue: false
  },
  password: {
    type: Sequelize.STRING,
    // Making `.password` act like a func hides it when serializing to JSON.
    // This is a hack to get around Sequelize's lack of a "private" option.
    get() {
      return () => this.getDataValue('password')
    }
  },
  salt: {
    type: Sequelize.STRING,
    // Making `.salt` act like a function hides it when serializing to JSON.
    // This is a hack to get around Sequelize's lack of a "private" option.
    get() {
      return () => this.getDataValue('salt')
    }
  },
  googleId: {
    type: Sequelize.STRING
  }
})

module.exports = User

/**
 * instanceMethods
 */
User.prototype.correctPassword = function(candidatePwd) {
  return User.encryptPassword(candidatePwd, this.salt()) === this.password()
}

/**
 * classMethods
 */
User.generateSalt = function() {
  return crypto.randomBytes(16).toString('base64')
}

User.encryptPassword = function(plainText, salt) {
  return crypto
    .createHash('RSA-SHA256')
    .update(plainText)
    .update(salt)
    .digest('hex')
}

/**
 * hooks
 */
const setSaltAndPassword = user => {
  if (user.changed('password')) {
    user.salt = User.generateSalt()
    user.password = User.encryptPassword(user.password(), user.salt())
  }
}

User.beforeCreate(setSaltAndPassword)
User.beforeUpdate(setSaltAndPassword)
