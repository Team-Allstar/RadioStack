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
    firstName: 'Preet "The Docta"',
    lastName: 'Gudimella',
    streetAddress1: '123 street ave',
    streetAdress2: null,
    city: 'city',
    state: 'state',
    zipCode: '12345',
    phoneNumber: '1234567890',
    email: 'cody1@email.com',
    isAdmin: true,
    password: '1'
    // salt: null,
    // googleId: null
  }
  const user2 = {
    firstName: 'Kevin "Mac-Daddy"',
    lastName: 'Cho',
    streetAddress1: '124 street ave',
    streetAdress2: null,
    city: 'city',
    state: 'state',
    zipCode: '12345',
    phoneNumber: '10293847561',
    email: 'cody2@email.com',
    password: '2'
    // salt: null,
    // googleId: null
  }
  const user3 = {
    firstName: 'Kevin "What did you just call me?"',
    lastName: 'Jo',
    streetAddress1: '125 street ave',
    streetAdress2: null,
    city: 'city',
    state: 'state',
    zipCode: '12345',
    phoneNumber: '3251647582',
    email: 'cody3@email.com',
    isAdmin: false,
    password: '3'
    // salt: null,
    // googleId: null
  }

  const user4 = {
    firstName: 'Josh "Data Creator"',
    lastName: 'Feinstein',
    streetAddress1: '125 street ave',
    streetAdress2: null,
    city: 'city',
    state: 'state',
    zipCode: '12345',
    phoneNumber: '65472859607',
    email: 'cody4@email.com',
    isAdmin: false,
    password: '4'
    // salt: null,
    // googleId: null
  }

  const category1 = {
    categoryName: 'TVs/Monitors'
    // imageUrl: ''
  }
  const category2 = {
    categoryName: 'Drones'
    // imageUrl: ''
  }
  const category3 = {
    categoryName: 'Headphones'
    // imageUrl: ''
  }
  const category4 = {
    categoryName: 'Laptops'
    // imageUrl: ''
  }

  const product1 = {
    productName: 'Dolby Dimension Wireless Bluetooth Headphones',
    productDescription: `Dolby LifeMix lets you control how much you hear of your surroundings, from a perfect blend of your entertainment and life around you (Transparency) to shutting out the world (Active Noise Cancellation).
    One-Touch Switching with three Source Buttons that can easily be paired with three different. Bluetooth-enabled devices to keep you connected to your entertainment.`,
    productInventory: 100,
    currentPrice: 59999,
    featured: false,
    imageUrl: '/images/products/DolbyDimensionHeadphones.jpeg',
    CategoryId: 3
  }
  const product2 = {
    productName: `Audio-Technica Headphones`,
    productDescription:
      'Noise-cancelling and venting technologies work together to maintain the Hi-Res Audio reproduction in both active and passive. Noise-cancelling modes 360 Degree omnidirectional noise-cancelling technology with high signal-to-noise ratio ensures consistent noise cancellation that is not affected by users head movement',
    productInventory: 70,
    currentPrice: 14999,
    featured: true,
    imageUrl: '/images/products/Audio-Technica .jpeg',
    CategoryId: 3
  }

  const product3 = {
    productName: 'Bose QuietComfort Headphones II',
    productDescription: `The most powerful Bose noise cancelling headphones yet.
    Go deeper into your music, work, and passions — with no noise in the way. Plus with Amazon Alexa, you can enjoy entertainment, get information, and manage your day.`,
    productInventory: 45,
    currentPrice: 34999,
    featured: false,
    imageUrl: '/images/products/BoseQuietComfort.jpg',
    CategoryId: 3
  }

  const product4 = {
    productName: 'DJI Mavic 2',
    productDescription:
      'Up to 31 minutes flight time, 44 mph max speed, 907g takeoff weight, 3-axis gimbal for steady shots, 8GB internal storage, SD card support up to 128 GB. Functions include ActiveTrack 2.0, Omnidirectional Obstacle Sensing, Hyperlapse, Low-Noise Design, Adjustable Aperture, HDR Photos',
    productInventory: 70,
    currentPrice: 187999,
    featured: true,
    imageUrl: '/images/products/ DJI Mavic 2.jpg',
    CategoryId: 2
  }

  const product5 = {
    productName: 'Ryze Tello Quadcopter Drone',
    productDescription:
      'Built in partnership with Ryze Tech, the DJI Tello Quadcopter is designed to be a fun, and educational quadcopter drone controllable with a smartphone. Just download the free Tello app and get started, with intuitive controls. At the front is a camera capable of streaming 720p video back to your smartphone and capturing 5-megapixel photos in flight. The vision positioning system uses a downward-facing camera to ensure stable hovering when desired.',
    productInventory: 70,
    currentPrice: 9999,
    featured: false,
    imageUrl: '/images/products/Ryze Tello Quadcopter Drone.jpg',
    CategoryId: 2
  }

  const product6 = {
    productName: 'HP 27er LED Monitor',
    productDescription: `HP's thinnes LCD display yet, has a sleek design that's easy on the eyes. Full HD display: Be prepared for brilliant visuals and crisp images with the unforgettable quality of this stunning Full HD display
    .`,
    productInventory: 80,
    currentPrice: 18999,
    featured: true,
    imageUrl: '/images/products/ HP 27er.jpeg',
    CategoryId: 1
  }

  const product7 = {
    productName: 'Apple MacBook Pro',
    productDescription: `13" Retina, 2.3GHz Dual-Core Intel Core i5, 8GB RAM, 128GB SSD, 
      Brilliant Retina display,
      Intel Iris Plus Graphics 640,
      Two Thunderbolt 3 (USB-C) ports,
      Up to 10 hours of battery life`,
    productInventory: 69,
    currentPrice: 149999,
    featured: true,
    imageUrl: '/images/products/Apple MacBook Pro.jpeg',
    CategoryId: 4
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
  const orders4 = {
    isCart: false,
    UserId: 2
  }

  const orderedProducts1 = {
    quantity: 10,
    pricePaid: null,
    ProductId: 1,
    UserId: 1,
    OrderId: 1
  }
  const orderedProducts2 = {
    quantity: 12,
    pricePaid: null,
    ProductId: 2,
    UserId: 1,
    OrderId: 1
  }
  const orderedProducts3 = {
    quantity: 9,
    pricePaid: null,
    ProductId: 1,
    UserId: 2,
    OrderId: 2
  }
  const orderedProducts4 = {
    quantity: 12,
    pricePaid: null,
    ProductId: 1,
    UserId: 3,
    OrderId: 3
  }
  const orderedProducts5 = {
    quantity: 1,
    pricePaid: null,
    ProductId: 2,
    UserId: 3,
    OrderId: 3
  }

  await User.create(user1)
  await User.create(user2)
  await User.create(user3)

  await Category.create(category1)
  await Category.create(category2)
  await Category.create(category3)
  await Category.create(category4)

  await Product.create(product1)
  await Product.create(product2)
  await Product.create(product3)
  await Product.create(product4)
  await Product.create(product5)
  await Product.create(product6)
  await Product.create(product7)

  await Order.create(orders1)
  await Order.create(orders2)
  await Order.create(orders3)
  await Order.create(orders4)

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
