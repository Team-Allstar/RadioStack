import axios from 'axios'

// action types
const GOT_ORDER_HISTORY = 'GOT_ORDER_HISTORY'

// action creators
const gotOrderHistory = pastOrderData => {
  return {
    type: GOT_ORDER_HISTORY,
    pastOrderData
  }
}

// thunk creators
export const fetchOrderHistory = id => {
  return async dispatch => {
    try {
      const response = await axios.get(`/api/order-history/${id}`)
      const data = response.data
      dispatch(gotOrderHistory(data))
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
    case GOT_ORDER_HISTORY:
      return [...action.pastOrderData]
    default:
      return state
  }
}
