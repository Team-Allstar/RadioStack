import React, {Component} from 'react'
import {connect} from 'react-redux'
import {withRouter, Link} from 'react-router-dom'
import {fetchSingleProduct} from '../store/singleProduct'
import {Button} from 'semantic-ui-react'
import {addToCart} from '../store/cart'

class SingleProduct extends Component {
  constructor() {
    super()

    this.state = {
      quantity: 1
    }

    this.addToCartClickHandler = this.addToCartClickHandler.bind(this)
    this.increaseQuantity = this.increaseQuantity.bind(this)
    this.decreaseQuantity = this.decreaseQuantity.bind(this)
  }

  componentDidMount() {
    const productId = Number(this.props.match.params.id)
    this.props.fetchMyProduct(productId)
  }

  addToCartClickHandler() {
    const productDetails = JSON.stringify({
      productName: this.props.singleProduct.productName,
      productPrice: this.props.singleProduct.currentPrice,
      quantity: this.state.quantity,
      productId: this.props.singleProduct.id,
      imageUrl: this.props.singleProduct.imageUrl
    })

    if (this.props.isLoggedIn) {
      this.props.addToCart(
        this.props.userId,
        this.props.singleProduct.id,
        this.state.quantity
      )
    } else {
      if (
        !window.localStorage.getItem(`prodId${this.props.singleProduct.id}`)
      ) {
        window.localStorage.setItem(
          `prodId${this.props.singleProduct.id}`,
          productDetails
        )
      } else {
        const currentProduct = window.localStorage.getItem(
          `prodId${this.props.singleProduct.id}`
        )
        const currentProductObject = JSON.parse(currentProduct)
        currentProductObject.quantity =
          currentProductObject.quantity + this.state.quantity
        const updatedQuantityProduct = JSON.stringify(currentProductObject)

        window.localStorage.removeItem(`prodId${this.props.singleProduct.id}`)
        window.localStorage.setItem(
          `prodId${this.props.singleProduct.id}`,
          updatedQuantityProduct
        )
      }
      console.log('local storage', window.localStorage)
    }
    window.location = `/cart/guest`
  }

  increaseQuantity() {
    this.setState({quantity: this.state.quantity + 1})
  }

  decreaseQuantity() {
    if (this.state.quantity === 1) {
      this.setState({quantity: 1})
    } else {
      this.setState({quantity: this.state.quantity - 1})
    }
  }

  render() {
    return (
      <div id="single-product">
        <ul>
          <img src={this.props.singleProduct.imageUrl} width="100px" />
          <h1>Product Details:</h1>
          <li>PRODUCT NAME : {this.props.singleProduct.productName}</li>
          <li>PRODUCT ID : {this.props.singleProduct.id}</li>
          <li>PRODUCT INFO : {this.props.singleProduct.productDescription}</li>
          <li>OUR STOCK : {this.props.singleProduct.productInventory}</li>
          <li>CURRENT PRICE :${this.props.singleProduct.currentPrice / 100}</li>
        </ul>
        <p>Quantity: {`${this.state.quantity}`}</p>

        <Button onClick={this.decreaseQuantity}>-</Button>
        <Button onClick={this.increaseQuantity}>+</Button>
        <Button onClick={this.addToCartClickHandler}>Add to Cart</Button>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    isLoggedIn: !!state.user.id,
    singleProduct: state.singleProduct,
    userId: state.user.id
  }
}
const mapDispatchToProps = dispatch => {
  return {
    fetchMyProduct: id => {
      dispatch(fetchSingleProduct(id))
    },
    addToCart: (userId, productId, quantity) => {
      dispatch(addToCart(userId, productId, quantity))
    }
  }
}

/**
 * CONTAINER
 */

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(SingleProduct)
)
