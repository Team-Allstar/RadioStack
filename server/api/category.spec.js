/* global describe beforeEach it */

const {expect} = require('chai')
const request = require('supertest')
const db = require('../db/index')
const app = require('../index')
const Category = require('../db/models/category')

describe('Category routes', () => {
  beforeEach(() => {
    return db.sync({force: true})
  })

  describe('/api/category/', () => {
    //const codysEmail = 'cody@puppybook.com'

    beforeEach(() => {
      return Category.create({
        categoryName: 'Headphones'
      })
    })

    it('GET /api/category', async () => {
      const res = await request(app)
        .get('/api/category')
        .expect(200)

      expect(res.body).to.be.an('array')
      expect(res.body[0].categoryName).to.be.equal('Headphones')
    })

    it('checks if imageUrl loads default image', async () => {
      const category = await Category.create({
        categoryName: 'Headphones'
      })

      expect(category.imageUrl).to.equal(
        '/images/categories/default-category.jpg'
      )
    })
  }) // end describe('/api/users')
}) // end describe('User routes')
