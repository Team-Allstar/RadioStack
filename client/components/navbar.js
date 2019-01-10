import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {logout} from '../store'

const Navbar = ({handleClick, isLoggedIn}) => (
  <div id="navbar">
    <Link to="/home">
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
      <div className="navLink">
        <Link to="/single-product">Single Product</Link>
      </div>
      {isLoggedIn ? (
        <div className="navLink">
          {/* The navbar will show these links after you log in */}
          {/* <Link to="/home">
            <img
              id="navbar-logo"
              src="/images/logos/RadioStack-R.png"
              width="50px"
            /> 
          </Link>*/}
          <a href="#" onClick={handleClick}>
            Logout
          </a>
        </div>
      ) : (
        <div className="navLink">
          {/* The navbar will show these links before you log in */}
          {/* <Link to="/login">Login</Link> */}
          <Link to="/login">Sign In</Link>
        </div>
      )}
      <div className="navLink">
        <Link to="/order-history">Order History</Link>
      </div>
      <div className="navLink">
        <Link to="/cart">Cart</Link>
      </div>
    </nav>
  </div>
)

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    isLoggedIn: !!state.user.id
  }
}

const mapDispatch = dispatch => {
  return {
    handleClick() {
      dispatch(logout())
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
