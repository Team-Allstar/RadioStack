import axios from 'axios'
import {runInNewContext} from 'vm'

// action types
const GOT_CART = 'GOT_CART'
const ADD_TO_CART = 'ADD_TO_CART'
const CHECKOUT_CART = 'CHECKOUT_CART'

// action creators
const gotCart = cartData => {
  return {
    type: GOT_CART,
    cartData
  }
}

const addToCartAction = cartData => {
  return {
    type: ADD_TO_CART,
    cartData
  }
}

const checkOutCart = cart => {
  return {
    type: CHECKOUT_CART,
    cart
  }
}

// thunk creators
export const checkoutCart = id => {
  return async dispatch => {
    try {
      const response = await axios.put(`/api/cart/checkout/${id}`)
      const message = response.data
      const action = checkOutCart(message)
      dispatch(action)
    } catch (error) {
      console.error(error)
    }
  }
}

export const fetchCart = id => {
  return async dispatch => {
    try {
      const response = await axios.get(`/api/cart/${id}`)
      const data = response.data
      dispatch(gotCart(data))
    } catch (err) {
      console.error(err)
    }
  }
}

export const removeItem = id => {
  return async dispatch => {
    try {
      // const response =
      await axios.delete(`/api/cart/remove/${id}`)
      // const data = response.data
      // dispatch(gotCart(data))
    } catch (err) {
      console.error(err)
    }
  }
}

export const addToCart = (userId, productId, quantity) => {
  return async dispatch => {
    try {
      const response = await axios.post(
        `/api/ordered-products/${userId}/${productId}/${quantity}`
      )
      const data = response.data
      dispatch(addToCartAction(data))
    } catch (err) {
      console.error(err)
    }
  }
}

export default function(state = [], action) {
  switch (action.type) {
    case GOT_CART:
      return [...action.cartData]
    //   case: ADD_TO_CART:
    //   return
    default:
      return state
  }
}
