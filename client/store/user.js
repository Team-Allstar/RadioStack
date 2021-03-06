import axios from 'axios'
import history from '../history'

// action types
const GET_USER = 'GET_USER'
const REMOVE_USER = 'REMOVE_USER'
const ADD_USER = 'ADD_USER'

/**
 * ACTION CREATORS
 */
const getUser = user => ({type: GET_USER, user})
const removeUser = () => ({type: REMOVE_USER})
const addUser = user => ({type: ADD_USER, user})
/**
 * THUNK CREATORS
 */

export const postUser = user => {
  return async dispatch => {
    const response = await axios.post('/api/users', user)
    const message = response.data
    const action = addUser(message)
    dispatch(action)
  }
}

export const me = () => async dispatch => {
  try {
    const res = await axios.get('/auth/me')
    dispatch(getUser(res.data || {}))
  } catch (err) {
    console.error(err)
  }
}

export const auth = (email, password, method) => async dispatch => {
  let res
  try {
    res = await axios.post(`/auth/${method}`, {email, password})
  } catch (authError) {
    return dispatch(
      getUser({
        error: authError
      })
    )
  }

  try {
    dispatch(getUser(res.data))
    history.push('/home')
  } catch (dispatchOrHistoryErr) {
    console.error(dispatchOrHistoryErr)
  }
}

export const logout = () => async dispatch => {
  try {
    await axios.post('/auth/logout')
    dispatch(removeUser())
    history.push('/login')
  } catch (err) {
    console.error(err)
  }
}

// reducer
export default function(user = {}, action) {
  switch (action.type) {
    case GET_USER:
      return action.user
    case ADD_USER:
      return action.user
    case REMOVE_USER:
      return {}
    default:
      return user
  }
}
