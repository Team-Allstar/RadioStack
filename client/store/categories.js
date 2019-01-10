import axios from 'axios'

const GOT_CATEGORIES_FROM_SERVER = 'GOT_CATEGORIES_FROM_SERVER'

export const gotCategoriesFromServer = categories => {
  return {
    type: GOT_CATEGORIES_FROM_SERVER,
    categories
  }
}

export const fetchCategoriesFromServer = () => {
  return async dispatch => {
    try {
      const response = await axios.get('/api/category')
      const message = response.data
      const action = gotCategoriesFromServer(message)
      dispatch(action)
    } catch (error) {
      console.error(error)
    }
  }
}

const categoriesReducer = (categories = [], action) => {
  switch (action.type) {
    case GOT_CATEGORIES_FROM_SERVER:
      return [...action.categories]
    default:
      return categories
  }
}

export default categoriesReducer
