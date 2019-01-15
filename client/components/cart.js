import React, {Component} from 'react'
import {connect} from 'react-redux'
import {fetchCart} from '../store/cart'
import {Link} from 'react-router-dom'
import {Button} from 'semantic-ui-react'
import {checkoutCart} from '../store/cart'
import Stripe from './stripe'
class Cart extends Component {
  constructor() {
    super()

    this.state = {
      total: 0,
      cart: {}
    }
    this.checkOutClickHandler = this.checkOutClickHandler.bind(this)
    // this.calculateCart = this.calculateCart.bind(this)
  }

  async componentDidMount() {
    this.setState({cart: await this.props.fetchCart(this.props.userId)})
  }

  checkOutClickHandler() {
    if (this.props.cart[0] && this.props.cart[0].OrderedProducts) {
      this.props.checkoutCart(this.props.cart[0].id)
      window.location = `/thank-you`
    } else {
      alert(
        'Your cart is empty. You cannot checkout until you select products to purchase.'
      )
    }
  }

  render() {
    let total = 0

    if (this.props.cart[0] && this.props.cart[0].OrderedProducts) {
      console.log('LOG CART', this.props.cart[0])
      total = this.props.cart[0].OrderedProducts.reduce((accum, curr) => {
        console.log('curr', curr)
        return accum + Number(curr.Product.currentPrice) * Number(curr.quantity)
      }, 0)
    }

    return (
      <div id="cart">
        <div id="title">
          <h1>Cart:</h1>
        </div>

        <div>
          {this.props.cart[0] && this.props.cart[0].OrderedProducts
            ? this.props.cart[0].OrderedProducts.map(el => {
                return (
                  <div>
                    <Link to={`/products/${el.Product.id}`}>
                      <img
                        key={`0${el.Product.id}`}
                        src={el.Product.imageUrl}
                        width="100px"
                      />
                      <div key={`A${el.Product.id}`}>
                        Item: {el.Product.productName}
                      </div>

                      <div key={`B${el.Product.id}`}>
                        Item Price: ${el.Product.currentPrice / 100}
                      </div>

                      <div key={`C${el.Product.id}`}>
                        Quantity: {Number(el.quantity)}
                      </div>

                      <div key={`C${el.Product.id}`}>
                        Extended Price: ${' '}
                        {Number(el.quantity) *
                          Number(el.Product.currentPrice / 100)}
                      </div>
                    </Link>
                  </div>
                )
              })
            : 'Cart is empty'}
        </div>
        <p>Total: ${`${total / 100}`}</p>
        <Button onClick={this.checkOutClickHandler}>Checkout</Button>
        <Stripe />
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
  },
  checkoutCart: id => {
    dispatch(checkoutCart(id))
  }
})

export default connect(mapStateToProps, mapDispatch)(Cart)
