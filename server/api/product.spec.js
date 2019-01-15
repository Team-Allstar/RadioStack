// /* global describe beforeEach it */

// const {expect} = require('chai')
// const request = require('supertest')
// const db = require('../db/index')
// const app = require('../index')
// const agent = request.agent(app)
// const Product = require('../db/models/product')

// describe('Product api test', () => {
//   beforeEach(() => {
//     return db.sync({force: true})
//   })

//   describe('Product api', () => {
//     const fullText =
//       'Our thinnest LCD display yet has a sleek design thats easy on the eyes. And the crisp, vibrant view from almost any angle comes at an ultra-affordable price.'

//     beforeEach(() => {
//       return Product.create({
//         productName: 'Test',
//         productDesrcription: fullText,
//         productInventory: 1,
//         currentPrice: 1000,
//         featured: false,
//         imageUrl: '/images/products/default-product.jpg'
//       })
//     })

//     it('Checks to see if productName can be receieved', async () => {
//       let description =
//         'Our thinnest LCD display yet has a sleek design thats easy on the eyes. And the crisp, vibrant view from almost any angle comes at an ultra-affordable price.'

//       await Product.create({
//         productName: 'Test',
//         productDesrcription: description,
//         productInventory: 1,
//         currentPrice: 1000,
//         featured: false,
//         imageUrl: '/images/products/default-product.jpg'
//       })
//       const res = await request(app)
//         .get('/api/products')
//         .expect(200)

//       //expect(res.body).to.be.an('array')
//       expect(res.body[0].productName).to.be.equal('Test')
//     })
//   }) // end describe('/api/users')
// }) // end describe('User routes')
