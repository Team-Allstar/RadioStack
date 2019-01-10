import React, {Component} from 'react'
import {connect} from 'react-redux'
import {withRouter, Link} from 'react-router-dom'
import {fetchSingleProduct} from '../store/singleProduct'

class SingleProduct extends Component {
  componentDidMount() {
    const productId = Number(this.props.match.params.id)
    this.props.fetchMyProduct(productId)
  }
  render() {
    return (
      <div id="single-product">
        <ul>
          <img src={this.props.singleProduct.imageUrl} width="100px" />
          <h1>Product Details:</h1>
          <li>PRODUCT NAME : {this.props.singleProduct.productName}</li>
          <li>PRODUCT INFO : {this.props.singleProduct.productDescription}</li>
          <li>OUR STOCK : {this.props.singleProduct.productInventory}</li>
          <li>CURRENT PRICE :{this.props.singleProduct.currentPrice}</li>
        </ul>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    singleProduct: state.singleProduct
  }
}
const mapDispatchToProps = dispatch => {
  return {
    fetchMyProduct: id => {
      dispatch(fetchSingleProduct(id))
    }
  }
}

/**
 * CONTAINER
 */

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(SingleProduct)
)
