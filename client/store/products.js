import axios from 'axios'
import history from '../history'

/**
 * ACTION TYPES
 */
const GOT_PRODUCTS = 'GOT_PRODUCTS'

/**
 * INITIAL STATE
 */
// const initialState = {
//   allProducts: []
// }

/**
 * ACTION CREATORS
 */
const gotAllProducts = allProducts => {
  return {type: GOT_PRODUCTS, allProducts}
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

/**
 * REDUCER
 */
export default function(products = [], action) {
  switch (action.type) {
    case GOT_PRODUCTS:
      return [...action.allProducts]
    default:
      return products
  }
}
