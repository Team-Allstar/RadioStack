import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {Button} from 'semantic-ui-react'
import {postUser} from '../store/user'
import {fetchGuestUserId, postItemsToOrderedProducts} from '../store/guest-user'
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
    if (!Object.keys(this.state.cart)[0]) {
      alert(
        'Your cart is empty. You cannot checkout until you select products to purchase.'
      )
    } else if (
      !this.state.firstName ||
      !this.state.lastName ||
      !this.state.email
    ) {
      alert(
        'You must enter a First Name, Last Name, and Email Address to checkout as Guest.'
      )
    } else {
      event.preventDefault()
      await this.props.postItemsToOrderedProducts(this.state)

      this.setState({
        firstName: '',
        lastName: '',
        email: ''
      })
      window.localStorage.clear()
      window.location = '/thank-you'
    }
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
      <div className="cart">
        <div className="title">
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
        <h2>Total: ${`${(total / 100).toFixed(2)}`}</h2>
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
  cart: state.cart
})

const mapDispatch = dispatch => ({
  postItemsToOrderedProducts: userData => {
    dispatch(postItemsToOrderedProducts(userData))
  }
})

export default connect(mapStateToProps, mapDispatch)(CartGuest)
