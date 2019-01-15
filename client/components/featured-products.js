import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {fetchFeaturedProducts} from '../store/products'
import {Grid, Header} from 'semantic-ui-react'
class FeaturedProducts extends Component {
  async componentDidMount() {
    await this.props.fetchFeaturedProducts()
  }

  render() {
    return (
      <div>
        <Header id="title" as="h1">
          Featured Products:
        </Header>
        <table id="products" width="700px">
          <tbody>
            {this.props.allFeaturedProducts
              ? this.props.allFeaturedProducts.map(el => (
                  <div key={el.id} className="product-box">
                    <Link to={`/products/${el.id}`}>
                      <tr>
                        <td>
                          <img src={el.imageUrl} width="100px" />
                        </td>
                        <td>{el.productName}</td>
                        {/* <td>{el.productDescription}</td> */}
                        <td>${el.currentPrice / 100}</td>
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
  allFeaturedProducts: state.products.featuredProducts
})

const mapDispatch = dispatch => ({
  fetchFeaturedProducts: () => {
    dispatch(fetchFeaturedProducts())
  }
})

export default connect(mapState, mapDispatch)(FeaturedProducts)
