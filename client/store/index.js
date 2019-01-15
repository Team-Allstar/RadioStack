import {createStore, combineReducers, applyMiddleware} from 'redux'
import createLogger from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import user from './user'
import products from './products'
import orderHistory from './order-history'
import categories from './categories'
import singleProduct from './singleProduct'
import guestUserId from './guest-user'
import cart from './cart'

const reducer = combineReducers({
  user: user,
  products: products,
  orderHistory: orderHistory,
  singleProduct: singleProduct,
  categories: categories,
  cart: cart,
  guestUserId: guestUserId
})
const middleware = composeWithDevTools(
  applyMiddleware(thunkMiddleware, createLogger({collapsed: true}))
)
const store = createStore(reducer, middleware)

export default store
export * from './user'
