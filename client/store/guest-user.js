import axios from 'axios'

// action types
const GUEST_USER_ID = 'GUEST_USER_ID'

/**
 * ACTION CREATORS
 */
const guestUserId = guestUserId => ({type: GUEST_USER_ID, guestUserId})
/**
 * THUNK CREATORS
 */

export const fetchGuestUserId = email => {
  return async dispatch => {
    const response = await axios.get(`/api/users/guest/${email}`)
    const message = response.data
    const action = guestUserId(message.id)
    dispatch(action)
  }
}

// reducer
export default function(guestUserId = 0, action) {
  switch (action.type) {
    case GUEST_USER_ID:
      return action.guestUserId
    default:
      return guestUserId
  }
}
