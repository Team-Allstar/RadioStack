'use strict'

const db = require('../server/db')
const User = require('../server/db/models/user')
const Category = require('../server/db/models/category')
const Product = require('../server/db/models/product')
const Order = require('../server/db/models/order')
const OrderedProducts = require('../server/db/models/ordered-products')

// async function seed() {
//   await db.sync({force: true})
//   console.log('db synced!')

const seed = async () => {
  await db.sync({force: true})

  const user1 = {
    firstName: 'John',
    lastName: 'Doe',
    streetAddress1: '123 street ave',
    streetAdress2: null,
    city: 'city',
    state: 'state',
    zipCode: '12345',
    phoneNumber: '1231234',
    email: 'cody1@email.com',
    isAdmin: true,
    password: 'drowssap'
    // salt: null,
    // googleId: null
  }
  const user2 = {
    firstName: 'Jane',
    lastName: 'Doe',
    streetAddress1: '124 street ave',
    streetAdress2: null,
    city: 'city',
    state: 'state',
    zipCode: '12345',
    phoneNumber: '1233211',
    email: 'cody2@email.com',
    password: 'drowssap1'
    // salt: null,
    // googleId: null
  }
  const user3 = {
    firstName: 'Sam',
    lastName: 'Doe',
    streetAddress1: '125 street ave',
    streetAdress2: null,
    city: 'city',
    state: 'state',
    zipCode: '12345',
    phoneNumber: '1237788',
    email: 'cody3@email.com',
    isAdmin: false,
    password: 'drowssap12'
    // salt: null,
    // googleId: null
  }

  const category1 = {
    categoryName: 'Monitors'
    //imageUrl: ''
  }
  const category2 = {
    categoryName: 'Drones'
    //imageUrl: ''
  }

  const product1 = {
    productName: 'HP 23er 23-inch Display',
    productDescription: 'A monitor',
    productInventory: 100,
    currentPrice: 139.99,
    featured: false
    //imageUrl:
  }
  const product2 = {
    productName: 'DJI',
    productDescription: 'A drone',
    productInventory: 70,
    currentPrice: 1499.99,
    featured: true
    //imageUrl:
  }

  // const orders = [
  //   {
  //     isCart: true
  //   }
  // ]

  // const orderedProducts = [
  //   {
  //     quantity: 10,
  //     pricePaid: 59.99
  //   },
  //   {
  //     quantity: 12,
  //     pricePaid: 59.99
  //   }
  // ]

  await User.create(user1)
  await User.create(user2)
  await User.create(user3)

  await Category.create(category1)
  await Category.create(category2)

  await Product.create(product1)
  await Product.create(product2)

  console.log('Seeding success!')
  db.close()
  console.log('Seeding successful!')
}

// const seed = () =>
//   Promise.all(users.map(user => User.create(user)))
//     .then(() =>
//       Promise.all(categories.map(category => Category.create(category)))
//     )
//     .then(() => Promise.all(products.map(product => Product.create(product))))
// .then(() => Promise.all(orders.map(order => Order.create(order))))
// .then(() =>
//   Promise.all(orderedProducts.map(oP => OrderedProducts.create(oP)))
// )

seed().catch(err => {
  console.error('Oh noes! Something went wrong!')
  console.error(err)
  db.close()
})
