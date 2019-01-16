const router = require('express').Router()
const User = require('../db/models/user')
module.exports = router

router.get('/', async (req, res, next) => {
  try {
    const users = await User.findAll()
    res.json('You are not an admin')
  } catch (err) {
    next(err)
  }
})

router.get('/:userId', async (req, res, next) => {
  try {
    const userId = req.params.userId
    const user = await User.findById(userId)

    if (req.user && req.user.dataValues.id === Number(req.params.userId)) {
      res.json(user)
    } else {
      res.status(403).send('You are not authorized')
    }
  } catch (err) {
    next(err)
  }
})

// router.get('/guest/:email', async (req, res, next) => {
//   try {
//     const email = req.params.email
//     const user = await User.findOne({
//       where: {
//         email: email
//       }
//     })
//     res.json(user)
//   } catch (err) {
//     next(err)
//   }
// })

router.post('/', async (req, res, next) => {
  try {
    const newUser = await User.create({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      password: req.body.password,
      streetAddress1: req.body.streetAddress1,
      streetAddress2: req.body.streetAddress2,
      city: req.body.city,
      state: req.body.state,
      zipCode: req.body.zipCode,
      phoneNumber: req.body.phoneNumber
    })
    res.json(newUser)
  } catch (error) {
    next(error)
  }
})

router.get('/me', async (req, res, next) => {
  try {
    const signedInUser = await User.findOne({
      where: {
        email: req.body.email,
        password: req.body.password
      }
    })
    if (signedInUser) {
      req.login(signedInUser, error => {
        if (error) {
          return next(error)
        } else {
          res.json(signedInUser)
        }
      })
    }
  } catch (err) {
    next(err)
  }
})
