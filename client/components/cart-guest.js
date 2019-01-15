import React, {Component} from 'react'
import {connect} from 'react-redux'
import {fetchCart} from '../store/cart'
import {Link} from 'react-router-dom'
import {Button} from 'semantic-ui-react'

class CartGuest extends Component {
  constructor() {
    super()

    this.state = {
      total: 0,
      cart: {}
    }

    this.guestCheckoutClickHandler = this.guestCheckoutClickHandler.bind(this)
  }

  async componentDidMount() {
    let cartObject = window.localStorage

    this.setState({cart: cartObject})
  }

  guestCheckoutClickHandler() {
    window.localStorage.clear()
    console.log('anything')
    // window.location = '/sign-up'
  }

  render() {
    let total = 0
    let cartArray = Object.keys(this.state.cart)
    // let testobject = {puppy: 'babydog'}

    // console.log('TestObject', testobject)
    console.log('STATEOBJ', this.state.cart)
    console.log('STATEARR', cartArray)

    if (cartArray[0]) {
      total = cartArray.reduce((accum, curr) => {
        console.log('curr', curr)
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
      </div>
    )
  }
}

const mapStateToProps = state => ({
  userId: state.user.id,
  cart: state.cart
})

const mapDispatch = dispatch => ({
  fetchCart: id => {
    dispatch(fetchCart(id))
  }
})

export default connect(mapStateToProps, mapDispatch)(CartGuest)
