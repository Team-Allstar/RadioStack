/* global describe beforeEach it */
const {expect} = require('chai')
const db = require('../index')
const Order = require('./order')

describe('Order db test', () => {
  beforeEach(() => {
    return db.sync({force: true})
  })

  describe('Order Model', () => {
    let checkOrder

    beforeEach(async () => {
      checkOrder = await Order.create({
        isCart: true
      })
    })
    it('checks if isCart is a boolean', async () => {
      const cart = await Order.create({
        isCart: false
      })

      expect(cart.isCart).to.equal(false)
    })
  }) // end describe('correctPassword')
}) // end describe('instanceMethods')
// end describe('User model')
