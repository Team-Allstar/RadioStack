import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {logout, me} from '../store'
class Navbar extends Component {
  // constructor() {
  //   super()
  // }

  async componentDidMount() {
    await this.props.me()
  }

  render() {
    return (
      <div id="navbar">
        <Link to="/">
          <img id="navbar-logo" src="/images/logos/RadioStack.png" />
        </Link>
        <nav>
          <div className="navLink">
            <Link to="/categories">Categories</Link>
          </div>
          <div className="navLink">
            <Link to="/products/featured">Featured Products</Link>
          </div>
          <div className="navLink">
            <Link to="/products">Products</Link>
          </div>
          {this.props.isLoggedIn ? (
            <div className="navLink">
              {/* The navbar will show these links after you log in */}
              <a href="#" onClick={this.props.handleClick}>
                Logout
              </a>
              <Link to={`/order-history/${this.props.userId}`}>
                Order History
              </Link>
            </div>
          ) : (
            <div className="navLink">
              {/* The navbar will show these links before you log in */}
              {/* <Link to="/login">Login</Link> */}
              <Link to="/login">Sign In</Link>
            </div>
          )}
          <div className="navLink">
            <Link to="/cart">Cart</Link>
          </div>
        </nav>
      </div>
    )
  }
}

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    isLoggedIn: !!state.user.id,
    userId: state.user.id
  }
}

const mapDispatch = dispatch => {
  return {
    handleClick() {
      dispatch(logout())
    },
    me: () => {
      dispatch(me())
    }
  }
}

export default connect(mapState, mapDispatch)(Navbar)

/**
 * PROP TYPES
 */
Navbar.propTypes = {
  handleClick: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired
}
