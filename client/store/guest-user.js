import axios from 'axios'

// action types

/**
 * ACTION CREATORS
 */

/**
 * THUNK CREATORS
 */

export const postItemsToOrderedProducts = userData => {
  return async () => {
    await axios.post(`/api/cart/checkout/guest/`, userData)
  }
}

// reducer
export default function(fetchedGuestUserId = 0, action) {
  switch (action.type) {
    default:
      return fetchedGuestUserId
  }
}
