import axios from 'axios'
import history from '../history'

/**
 * ACTION TYPES
 */
const GET_PRODUCTS = 'GET_PRODUCTS'

/**
 * INITIAL STATE
 */
const initialState = {
  allProducts: []
}

/**
 * ACTION CREATORS
 */
const getAllProducts = () => ({type: GET_PRODUCTS, allProducts})

/**
 * THUNK CREATORS
 */
export const getAllProducts = () => async dispatch => {
  try {
    const res = await axios.get('/api/products')
    dispatch(getAllProducts(res.data))
  } catch (err) {
    console.error(err)
  }
}

/**
 * REDUCER
 */
export default function(state = initialState, action) {
  switch (action.type) {
    case GET_PRODUCTS:
      return {...state, allProducts: [...action.allProducts]}
    default:
      return state
  }
}
