import React, {Component} from 'react'
import {connect} from 'react-redux'
import {fetchCart} from '../store/cart'
import {Link} from 'react-router-dom'
import {Button} from 'semantic-ui-react'
class Cart extends Component {
  constructor() {
    super()

    this.state = {
      total: 0
    }
    // this.calculateCart = this.calculateCart.bind(this)
  }

  async componentDidMount() {
    this.setState({cart: await this.props.fetchCart(this.props.userId)})
  }

  render() {
    let total = 0

    if (this.props.cart[0]) {
      console.log('LOG CART', this.props.cart[0])
      total = this.props.cart[0].OrderedProducts.reduce((accum, curr) => {
        console.log('curr', curr)
        return accum + Number(curr.Product.currentPrice) * Number(curr.quantity)
      }, 0)
    }

    return (
      <div id="cart">
        <div>
          <h1>Cart:</h1>
        </div>
        <div>
          {this.props.cart[0]
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
                        Item Price: ${Number(
                          el.Product.currentPrice / 100
                        ).toFixed(2)}
                      </div>
                      <div key={`C${el.Product.id}`}>
                        Quantity: {Number(el.quantity)}
                      </div>
                      <div key={`C${el.Product.id}`}>
                        Extended Price:{' '}
                        {Number(el.quantity) *
                          Number(el.Product.currentPrice / 100).toFixed(2)}
                      </div>
                    </Link>
                  </div>
                )
              })
            : 'Cart is empty'}
        </div>
        <p>Total: ${`${(total / 100).toFixed(2)}`}</p>
        <Button>Checkout</Button>
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

export default connect(mapStateToProps, mapDispatch)(Cart)
