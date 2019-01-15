import React, {Component} from 'react'
import {connect} from 'react-redux'
import {withRouter, Route, Switch} from 'react-router-dom'
import PropTypes from 'prop-types'
import {
  Login,
  Signup,
  Cart,
  OrderHistory,
  Categories,
  FeaturedProducts,
  Products,
  SingleProduct,
  Home,
  NewUserEntry,
  SignUpSuccess,
  ThankYou,
  CartGuest
} from './components'
import {me} from './store'

/**
 * COMPONENT
 */
class Routes extends Component {
  componentDidMount() {
    this.props.loadInitialData()
  }

  render() {
    const {isLoggedIn} = this.props

    return (
      <Switch>
        {/* Routes placed here are available to all visitors */}
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
        <Route exact path="/cart/guest" component={CartGuest} />
        <Route path={`/cart/${this.props.userId}`} component={Cart} />
        <Route path="/categories" component={Categories} />
        <Route exact path="/products/featured" component={FeaturedProducts} />
        <Route exact path="/products" component={Products} />
        <Route path="/products/:id" component={SingleProduct} />
        <Route exact path="/" component={Home} />
        <Route exact path="/signed-up" component={SignUpSuccess} />
        <Route exact path="/sign-up" component={NewUserEntry} />
        <Route exact path="/thank-you" component={ThankYou} />
        <Route
          path={`/order-history/${this.props.userId}`}
          component={OrderHistory}
        />
        {isLoggedIn && (
          <Switch>
            {/* Routes placed here are only available after logging in */}
            {/* <Route path="/home" component={UserHome} /> */}
          </Switch>
        )}
        {/* Displays our Login component as a fallback */}
      </Switch>
    )
  }
}

/*git b
 * CONTAINER
 */
const mapState = state => {
  return {
    // Being 'logged in' for our purposes will be defined has having a state.user that has a truthy id.
    // Otherwise, state.user will be an empty object, and state.user.id will be falsey
    isLoggedIn: !!state.user.id,
    userId: state.user.id
  }
}

const mapDispatch = dispatch => {
  return {
    loadInitialData() {
      dispatch(me())
    }
  }
}

// The `withRouter` wrapper makes sure that updates are not blocked
// when the url changes
export default withRouter(connect(mapState, mapDispatch)(Routes))

/**
 * PROP TYPES
 */
Routes.propTypes = {
  loadInitialData: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired
}
