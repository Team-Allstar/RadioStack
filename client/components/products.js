import React, {Component} from 'react'
import {connect} from 'react-redux'
import {fetchAllProducts} from '../store/products'

class Products extends Component {
  constructor(props) {
    super(props)

    this.state = {
      // allProducts: []
    }
  }

  async componentDidMount() {
    await this.props.fetchAllProducts()
  }

  render() {
    //console.log('LOG', this.props.allProducts)
    return (
      <div id="products">
        {this.props.allProducts
          ? this.props.allProducts.map(el => (
              <div key={el.id}>{el.productName}</div>
            ))
          : 'Loading'}
      </div>
    )
  }
}

const mapState = state => {
  return {allProducts: state.products}
}

const mapDispatch = dispatch => ({
  fetchAllProducts: () => {
    dispatch(fetchAllProducts())
  }
})

export default connect(mapState, mapDispatch)(Products)
