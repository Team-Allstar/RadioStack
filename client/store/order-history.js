import axios from 'axios'

// action types
const GOT_ORDER_HISTORY = 'GOT_ORDER_HISTORY'

// action creators
const gotOrderHistory = falseCart => {
  return {
    type: GOT_ORDER_HISTORY,
    falseCart
  }
}

// thunk creators
export const fetchOrderHistory = () => {
  return async dispatch => {
    try {
      const {data} = await axios.get('/api/order-history')
      dispatch(gotOrderHistory(data))
    } catch (err) {
      console.error(err)
    }
  }
}

// reducer
export default function(orderHistory = [], action) {
  switch (action.type) {
    case GOT_ORDER_HISTORY:
      return [...action.falseCart]
    default:
      return orderHistory
  }
}
