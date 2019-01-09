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
    featured: false,
    //imageUrl:
    CategoryId: 1
  }
  const product2 = {
    productName: 'DJI',
    productDescription: 'A drone',
    productInventory: 70,
    currentPrice: 1499.99,
    featured: true,
    //imageUrl:
    CategoryId: 1
  }

  const orders1 = {
    isCart: true,
    UserId: 1
  }
  const orders2 = {
    isCart: true,
    UserId: 2
  }
  const orders3 = {
    isCart: false,
    UserId: 3
  }

  const orderedProducts1 = {
    quantity: 10,
    pricePaid: 139.99,
    ProductId: 1,
    UserId: 1,
    OrderId: 1
  }
  const orderedProducts2 = {
    quantity: 1,
    pricePaid: 1499.99,
    ProductId: 2,
    UserId: 1,
    OrderId: 1
  }
  const orderedProducts3 = {
    quantity: 1,
    pricePaid: 139.99,
    ProductId: 1,
    UserId: 2,
    OrderId: 2
  }
  const orderedProducts4 = {
    quantity: 1,
    pricePaid: 139.99,
    ProductId: 1,
    UserId: 3,
    OrderId: 3
  }
  const orderedProducts5 = {
    quantity: 1,
    pricePaid: 1499.99,
    ProductId: 2,
    UserId: 3,
    OrderId: 3
  }

  await User.create(user1)
  await User.create(user2)
  await User.create(user3)

  await Category.create(category1)
  await Category.create(category2)

  await Product.create(product1)
  await Product.create(product2)

  await Order.create(orders1)
  await Order.create(orders2)
  await Order.create(orders3)

  await OrderedProducts.create(orderedProducts1)
  await OrderedProducts.create(orderedProducts2)
  await OrderedProducts.create(orderedProducts3)
  await OrderedProducts.create(orderedProducts4)
  await OrderedProducts.create(orderedProducts5)

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
