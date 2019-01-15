/* global describe beforeEach afterEach it */

import {expect} from 'chai'
import {fetchAllProducts, fetchFeaturedProducts} from './products'
import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'
import configureMockStore from 'redux-mock-store'
import thunkMiddleware from 'redux-thunk'
import history from '../history'

const middlewares = [thunkMiddleware]
const mockStore = configureMockStore(middlewares)

describe('thunk creators', () => {
  let store
  let mockAxios

  const initialState = {user: {}}

  beforeEach(() => {
    mockAxios = new MockAdapter(axios)
    store = mockStore(initialState)
  })

  afterEach(() => {
    mockAxios.restore()
    store.clearActions()
  })

  describe('fetchAllProducts', () => {
    it('eventually dispatches the GOT_PRODUCT action', async () => {
      const fakeProduct = {productName: 'fakeProduct'}
      mockAxios.onGet('/api/products').replyOnce(200, fakeProduct)
      await store.dispatch(fetchAllProducts())
      const actions = store.getActions()
      expect(actions[0].type).to.be.equal('GOT_PRODUCTS')
      expect(actions[0].allProducts).to.be.deep.equal(fakeProduct)
    })
  })

  describe('fetchFeaturedProducts', () => {
    it('eventually dispatches the GOT_FEATURED_PRODUCTS action', async () => {
      const fakeFeatured = {productName: 'fakeFeaturedItem'}
      mockAxios.onGet('/api/products/featured').replyOnce(200, fakeFeatured)
      await store.dispatch(fetchFeaturedProducts())
      const actions = store.getActions()
      expect(actions[0].type).to.be.equal('GOT_FEATURED_PRODUCTS')
      expect(actions[0].allFeaturedProducts).to.be.deep.equal(fakeFeatured)
    })
  })
})
