import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {fetchAllProducts} from '../store/products'

class Products extends Component {

  async componentDidMount() {
    await this.props.fetchAllProducts()
  }

  render() {
    return (
      <div id="products">
        <h1>All Products:</h1>
        <table width="700px">
          <tbody>
            {this.props.allProducts
              ? this.props.allProducts.map(el => (
                  <div key={el.id} className="product-box">
                    <Link to={`/products/${el.id}`}>
                      <tr>
                        <td>
                          <img src={el.imageUrl} width="100px" />
                        </td>
                        <td>{el.productName}</td>
                        <td>{el.productDescription}</td>
                        <td>{el.currentPrice}</td>
                      </tr>
                    </Link>
                  </div>
                ))
              : 'Loading'}
          </tbody>
        </table>
      </div>
    )
  }
}

const mapState = state => ({
  allProducts: state.products.allProducts
})

const mapDispatch = dispatch => ({
  fetchAllProducts: () => {
    dispatch(fetchAllProducts())
  }
})

export default connect(mapState, mapDispatch)(Products)
