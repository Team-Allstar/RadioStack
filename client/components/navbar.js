import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {logout, me} from '../store'
import {Menu, Image} from 'semantic-ui-react'
// import {Categories} from '.'
class Navbar extends Component {
  // constructor() {
  //   super()
  // }

  async componentDidMount() {
    await this.props.me()
  }

  render() {
    return (
      <Menu>
        <Image
          as={Link}
          to="/"
          size="small"
          src="/images/logos/RadioStack.png"
        />

        {/* <Menu.Item as={Link} name="Categories" to="/categories">
          Categories
        </Menu.Item> */}
        <Menu.Item as={Link} name="Procuts" to="/products">
          Products
        </Menu.Item>
        {this.props.isLoggedIn ? (
          <div>
            <Menu.Item name="Logout" onClick={this.props.handleClick}>
              Logout
            </Menu.Item>
          </div>
        ) : (
          <Menu.Item as={Link} name="Sign In" to="/login">
            Sign In
          </Menu.Item>
        )}
        {this.props.isLoggedIn ? (
          <div>
            <Menu.Item
              as={Link}
              name="Order History"
              to={`/order-history/${this.props.userId}`}
            >
              Order History
            </Menu.Item>
          </div>
        ) : (
          <div />
        )}
        {this.props.isLoggedIn ? (
          <div>
            <Menu.Item
              as={Link}
              name="Cart-Logged-In"
              to={`/cart/${this.props.userId}`}
            >
              User Cart
            </Menu.Item>
          </div>
        ) : (
          <Menu.Item as={Link} name="Cart-Guest" to="/cart/guest">
            Guest Cart
          </Menu.Item>
        )}
      </Menu>
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

// <div id="navbar">

// </div>
