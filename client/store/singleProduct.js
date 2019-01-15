import axios from 'axios'

const GOT_SINGLE_PRODUCT_FROM_SERVER = 'GOT_SINGLE_PRODUCT_FROM_SERVER'
// const ADD_SINGLE_PRODUCT_TO_CART = 'ADD_SINGLE_PRODUCT_TO_CART'

const gotSingleProduct = singleProduct => {
  return {
    type: GOT_SINGLE_PRODUCT_FROM_SERVER,
    singleProduct
  }
}

export const fetchSingleProduct = id => {
  return async dispatch => {
    try {
      const response = await axios.get(`/api/products/${id}`)
      const message = response.data
      const action = gotSingleProduct(message)
      dispatch(action)
    } catch (error) {
      console.error(error)
    }
  }
}

export default (singleProduct = {}, action) => {
  switch (action.type) {
    case GOT_SINGLE_PRODUCT_FROM_SERVER:
      return action.singleProduct
    default:
      return singleProduct
  }
}
