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
    password: 'drowssap1'
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
    password: 'drowssap12'
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
    email: 'cody3@email.com',
    isAdmin: false,
    password: 'drowssap12'
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
    productName: 'Dolby Dimension Wireless Bluetooth Over Ear Headphones',
    productDescription: `Dolby Dimension gives you a smarter way to binge - one that's created just for you. Now you'll have incredible cinematic sound for all your entertainment, plus control over how much of your surroundings you hear with Dolby LifeMix. Long-lasting comfort, with the ability to easily switch from TV to phone to tablet and more, rounds out the ultimate binge-watching experience.`,
    productInventory: 100,
    currentPrice: 139.99,
    featured: false,
    //imageUrl:
    CategoryId: 3
  }
  const product2 = {
    productName: `Audio-Technica ATH-MSR7NC`,
    productDescription: `These headphones are outfitted with exclusive 45 millimeter True Motion Drivers to deliver distortion-free audio reproduction with extended frequency response. A miniature microphone is incorporated into the top of each earcup to pick up ambient noise that can then be blocked by an appropriate sound-cancelling signal when the active noise-cancelling function is activated. Having the microphone on the top, instead of on the side, of the housing ensures consistent noise cancellation unaffected by the user’s head movement or by wind noise. Each earcup also has an acoustic vent, ideally positioned on the side of the housing, 90 degrees from mic, to enhance tuning without negatively affecting sound quality. The result is consistent Hi-Res Audio reproduction whether in active or passive noise-cancelling modes.`,
    productInventory: 70,
    currentPrice: 299.99,
    featured: true,
    //imageUrl:
    CategoryId: 3
  }

  const product3 = {
    productName: 'Bose QuietComfort 35 (Series II)',
    productDescription: `The most powerful Bose noise cancelling headphones yet.
    Clear away the distractions of the world, and focus on what matters most. Go deeper into your music, work, and passions — with no noise in the way. Plus with Amazon Alexa, you can enjoy entertainment, get information, and manage your day. Just ask.`,
    productInventory: 45,
    currentPrice: 349.99,
    featured: false,
    //imageUrl:
    CategoryId: 3
  }

  const product4 = {
    productName: 'DJI Mavic 2 Zoom Drone Quadcopter',
    productDescription:
      'Beginner drones are often cheaper because they offer fewer bells and whistles. In addition to beginner drones, there are some high-end drones that are also suitable for novice pilots, and we’ll talk about those in this guide too. We will recommend the best drones for complete novices as well as advanced beginners looking to take their skills to the next level.There aren’t a lot of drones that feature both high-quality cameras and propeller guards, but DJI manages to have multiple beginner drone offerings that are among the best on the market. So, without further delay, let’s take a look at their best beginner drones!',
    productInventory: 70,
    currentPrice: 1249.99,
    featured: true,
    //imageUrl:
    CategoryId: 2
  }

  const product5 = {
    productName: 'Ryze Tello Quadcopter Drone with HD Camera and VR',
    productDescription:
      'Built in partnership with Ryze Tech, the DJI Tello Quadcopter is designed to be a cute, fun, and educational quadcopter drone. Its tiny form factor and smart Intel processor enable it to perform exciting aerial tricks on a whim, all through smartphone control. Download the free Tello app and get going, with intuitive controls for entertaining flying maneuvers. The included battery will power up to 13 minutes of flight on a full charge. At the front of the Tello is a camera capable of streaming 720p video back to your smartphone and capturing 5-megapixel photos in flight. The intelligent flight processor can coordinate camera movements for some custom shooting angles. The vision positioning system uses a downward-facing camera to ensure stable hovering when desired.',
    productInventory: 70,
    currentPrice: 149.99,
    featured: false,
    //imageUrl:
    CategoryId: 2
  }

  const product6 = {
    productName: 'HP 27er 27-in IPS LED Backlit Monitor',
    productDescription: `Our thinnest LCD display yet has a sleek design that's easy on the eyes. And the crisp, vibrant view from almost any angle comes at an ultra-affordable price.`,
    productInventory: 70,
    currentPrice: 179.99,
    featured: true,
    //imageUrl:
    CategoryId: 1
  }

  const product7 = {
    productName:
      'Apple MacBook Pro (13" Retina, 2.3GHz Dual-Core Intel Core i5, 8GB RAM, 128GB SSD) ',
    productDescription: 'A drone',
    productInventory: 70,
    currentPrice: 1499.99,
    featured: true,
    //imageUrl:
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
