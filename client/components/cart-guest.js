import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {Button} from 'semantic-ui-react'
import {postUser, fetchGuestUserId} from '../store/user'
import GuestCheckoutForm from './guest-checkout-form'

class CartGuest extends Component {
  constructor() {
    super()

    this.state = {
      total: 0,
      cart: {},
      firstName: '',
      lastName: '',
      email: '',
      password: 'guest'
    }

    this.guestCheckoutClickHandler = this.guestCheckoutClickHandler.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  async componentDidMount() {
    let cartObject = window.localStorage

    this.setState({cart: cartObject})
  }

  handleChange = event => {
    this.setState({
      [event.currentTarget.name]: event.currentTarget.value
    })
  }

  async guestCheckoutClickHandler() {
    if (!this.state.firstName || !this.state.lastName || !this.state.email) {
      alert(
        'You must enter a First Name, Last Name, and Email Address to checkout as Guest.'
      )
    } else {
      event.preventDefault()
      await this.props.postNewUser(this.state)
      await this.props.fetchGuestUserId(this.state.email)
      const cartString = window.localStorage

      this.props.postItemsToOrderedProducts(this.props.guestUserId, cartString)

      this.setState({
        firstName: '',
        lastName: '',
        email: ''
      })
    }
    // window.localStorage.clear()
    // window.location = '/thank-you'
  }

  render() {
    let total = 0
    let cartArray = Object.keys(this.state.cart)

    if (cartArray[0]) {
      total = cartArray.reduce((accum, curr) => {
        return (
          accum +
          Number(JSON.parse(this.state.cart[curr]).productPrice) *
            Number(JSON.parse(this.state.cart[curr]).quantity)
        )
      }, 0)
    }

    return (
      <div id="cart">
        <div>
          <h1>Cart:</h1>
        </div>
        <div>
          {cartArray[0]
            ? cartArray.map(el => {
                return (
                  <div>
                    <Link
                      to={`/products/${
                        JSON.parse(this.state.cart[el]).productId
                      }`}
                    >
                      <img
                        key={`0${JSON.parse(this.state.cart[el]).productId}`}
                        src={JSON.parse(this.state.cart[el]).imageUrl}
                        width="100px"
                      />

                      <div
                        key={`A${JSON.parse(this.state.cart[el]).productId}`}
                      >
                        Item: {JSON.parse(this.state.cart[el]).productName}
                      </div>
                      <div
                        key={`B${JSON.parse(this.state.cart[el]).productId}`}
                      >
                        Item Price: ${Number(
                          JSON.parse(this.state.cart[el]).productPrice / 100
                        ).toFixed(2)}
                      </div>
                      <div
                        key={`C${JSON.parse(this.state.cart[el]).productId}`}
                      >
                        Quantity:{' '}
                        {Number(JSON.parse(this.state.cart[el]).quantity)}
                      </div>
                      <div
                        key={`C${JSON.parse(this.state.cart[el]).productId}`}
                      >
                        Extended Price: ${' '}
                        {(
                          Number(JSON.parse(this.state.cart[el]).quantity) *
                          Number(
                            JSON.parse(this.state.cart[el]).productPrice / 100
                          )
                        ).toFixed(2)}
                      </div>
                    </Link>
                  </div>
                )
              })
            : 'Cart is empty'}
        </div>
        <p>Total: ${`${total / 100}`}</p>
        <Button onClick={this.guestCheckoutClickHandler}>Checkout</Button>
        <div>
          <GuestCheckoutForm
            {...this.state}
            handleSubmit={this.handleSubmit}
            handleChange={this.handleChange}
          />
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  userId: state.user.id,
  cart: state.cart,
  guestUserId: state.guestUserId
})

const mapDispatch = dispatch => ({
  postNewUser: user => {
    dispatch(postUser(user))
  },
  fetchGuestUserId: email => {
    dispatch(fetchGuestUserId(email))
  },
  postItemsToOrderedProducts: (userId, localStorage) => {
    dispatch(postItemsToOrderedProducts(userId, localStorage))
  }
})

export default connect(mapStateToProps, mapDispatch)(CartGuest)
