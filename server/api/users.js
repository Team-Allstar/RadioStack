const router = require('express').Router()
const User = require('../db/models/user')
module.exports = router

router.get('/', async (req, res, next) => {
  try {
    const users = await User.findAll()
    res.json(users)
  } catch (err) {
    next(err)
  }
})

router.get('/:userId', async (req, res, next) => {
  try {
    const userId = req.params.userId
    const users = await User.findById(userId)
    res.json(users)
  } catch (err) {
    next(err)
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
