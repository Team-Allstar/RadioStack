/* global describe beforeEach it */

const {expect} = require('chai')
const db = require('../index')
const User = db.model('user')

describe('User model', () => {
  beforeEach(() => {
    return db.sync({force: true})
  })

  describe('instanceMethods', () => {
    describe('correctPassword', () => {
      let preet
      let josh

      beforeEach(async () => {
        preet = await User.create({
          email: 'cody@puppybook.com',
          password: 'bones',
          isAdmin: false,
          streetAddress1: '123 Maint Stree',
          streetAddress2: 'Apt 2',
          phoneNumber: '516.798.8612',
          firstName: 'preet',
          lastName: 'gudimella'
        })
        // (josh = await User.create({
        //   email: '',
        //   password: '',
        //   isAdmin: true,
        //   streetAddress1: '',
        //   streetAddress2: '',
        //   phoneNumber: '516-798-8612',
        //   firstName: '',
        //   lastName: ''
        // }))
      })

      it('returns true if the password is correct', () => {
        expect(preet.correctPassword('bones')).to.be.equal(true)
      })

      it('returns false if the password is incorrect', () => {
        expect(preet.correctPassword('bonez')).to.be.equal(false)
      })
    }) // end describe('correctPassword')
  }) // end describe('instanceMethods')
}) // end describe('User model')
