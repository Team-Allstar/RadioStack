import React, {Component} from 'react'
import {connect} from 'react-redux'
import {fetchCart} from '../store/cart'
import {Link} from 'react-router-dom'
import {Button} from 'semantic-ui-react'
import {checkoutCart, removeItem} from '../store/cart'
import Stripe from './stripe'
class Cart extends Component {
  constructor() {
    super()

    this.state = {
      cart: 0
    }
    this.checkOutClickHandler = this.checkOutClickHandler.bind(this)
    this.deleteItem = this.deleteItem.bind(this)
    // this.calculateCart = this.calculateCart.bind(this)
  }

  async componentDidMount() {
    this.setState({cart: await this.props.fetchCart(this.props.userId)})
  }

  async deleteItem(id) {
    console.log('works')
    await this.props.removeItem(id)
    this.setState({cart: await this.props.fetchCart(this.props.userId)})
  }

  checkOutClickHandler() {
    if (!this.props.cart[0].OrderedProducts) {
      alert(
        'Your cart is empty. You cannot checkout until you select products to purchase.'
      )
      return
    }

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
      total = this.props.cart[0].OrderedProducts.reduce((accum, curr) => {
        return accum + Number(curr.Product.currentPrice) * Number(curr.quantity)
      }, 0)
    }

    return (
      <div id="cart">
        <div className="title">
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
                      <div key={`D${el.Product.id}`}>
                        Extended Price: ${' '}
                        {Number(el.quantity) *
                          Number(el.Product.currentPrice / 100)}
                      </div>
                    </Link>
                    <div key={el.Product.id}>
                      <img
                        onClick={() => {
                          this.deleteItem(el.Product.id)
                        }}
                        className="delete-item"
                        src="/images/icons/delete-item.png"
                        width="20px"
                      />
                    </div>
                  </div>
                )
              })
            : 'Cart is empty'}
        </div>
        <h2>Total: ${`${(total / 100).toFixed(2)}`}</h2>
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
  },
  removeItem: id => {
    dispatch(removeItem(id))
  }
})

export default connect(mapStateToProps, mapDispatch)(Cart)
