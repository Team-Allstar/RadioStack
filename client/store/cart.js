import axios from 'axios'

// action types
const GOT_CART = 'GOT_CART'
const ADD_TO_CART = 'ADD_TO_CART'

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

// thunk creators
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

// reducer
//reducers
// let initialState = {
//   falseCart: []
// }
// const reducer = (state = initialState, action) => {
//   switch (action.type) {
//     case GOT_ORDER_HISTORY:
//       return {...state, falseCart: [...action.falseCart]}
//     default:
//       return state
//   }
// }

// export default reducer

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
