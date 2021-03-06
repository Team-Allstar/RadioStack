/* global describe beforeEach it */

const {expect} = require('chai')
const db = require('../index')
const Product = require('./product')

describe('Product db test', () => {
  beforeEach(() => {
    return db.sync({force: true})
  })

  describe('Product Model', () => {
    it('checks whether product is an object', async () => {
      let description =
        'Our thinnest LCD display yet has a sleek design thats easy on the eyes. And the crisp, vibrant view from almost any angle comes at an ultra-affordable price.'

      const result = await Product.create({
        productName: 'test 27er 27-in IPS LED Backlit Monitor',
        productDescription: description
      })

      expect(result).to.be.an('object')
      // expect(result.productName).to.equal(
      //   'HP 27er 27-in IPS LED Backlit Monitor'
      // )
      //expect(result.productDescription).to.equal(description)
    })
    it('accepts any length for product description', async () => {
      let description =
        'Our thinnest LCD display yet has a sleek design thats easy on the eyes. And the crisp, vibrant view from almost any angle comes at an ultra-affordable price.'

      const test = await Product.create({
        productName: 'HP 27er 27-in IPS LED Backlit Monitor',
        productDescription: description
      })
      expect(test.productDescription).to.equal(description)
    })
    it('checks if default value is 0', async () => {
      let description =
        'Our thinnest LCD display yet has a sleek design thats easy on the eyes. And the crisp, vibrant view from almost any angle comes at an ultra-affordable price.'

      const product = await Product.create({
        productName: 'HP 27er 27-in IPS LED Backlit Monitor',
        productDescription: description
      })

      expect(product.productInventory).to.equal(0)
      expect(product.currentPrice).to.equal(0)
    })
  }) // end describe('correctPassword')
}) // end describe('instanceMethods')
// end describe('User model')
