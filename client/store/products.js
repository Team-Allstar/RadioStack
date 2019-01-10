import axios from 'axios'
import history from '../history'

/**
 * ACTION TYPES
 */
const GOT_PRODUCTS = 'GOT_PRODUCTS'
const GOT_FEATURED_PRODUCTS = 'GOT_FEATURED_PRODUCTS'

/**
 * INITIAL STATE
 */
const initialState = {
  allProducts: [],
  featuredProducts: []
}

/**
 * ACTION CREATORS
 */
const gotAllProducts = allProducts => {
  return {type: GOT_PRODUCTS, allProducts}
}

const gotFeaturedProducts = allFeaturedProducts => {
  return {type: GOT_FEATURED_PRODUCTS, allFeaturedProducts}
}
/**
 * THUNK CREATORS
 */
export const fetchAllProducts = () => {
  return async dispatch => {
    try {
      const {data} = await axios.get('/api/products')
      dispatch(gotAllProducts(data))
    } catch (err) {
      console.error(err)
    }
  }
}

export const fetchFeaturedProducts = () => {
  return async dispatch => {
    try {
      const {data} = await axios.get('/api/products/featured')
      dispatch(gotFeaturedProducts(data))
    } catch (err) {
      console.error(err)
    }
  }
}

/**
 * REDUCER
 */
export default function(products = initialState, action) {
  switch (action.type) {
    case GOT_PRODUCTS:
      return {...products, allProducts: [...action.allProducts]}
    case GOT_FEATURED_PRODUCTS:
      return {...products, featuredProducts: [...action.allFeaturedProducts]}
    default:
      return products
  }
}
