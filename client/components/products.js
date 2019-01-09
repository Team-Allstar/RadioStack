import React, {Component} from 'react'
import Axios from 'axios'
import {connect} from 'react-redux'
import {fetchAllProducts} from '../store/user'

class Products extends Component {
  constructor(props) {
    super(props)
    this.state = {
      allProducts: []
    }
  }

  async componentDidMount() {
    const response = await Axios.get('/api/products')
    console.log('my data', response.data)
    const allProducts = response.data
    this.setState((this.state.allProducts = allProducts))
  }

  render() {
    return (
      <div id="products">
        {this.state.allProducts.map(el => (
          <div key={el.id}>{el.productName}</div>
        ))}
      </div>
    )
  }
}

const matchStateToProps = state => ({})

const matchDispatchToProps = dispatch => ({})

export default connect(matchStateToProps, matchDispatchToProps)(Products)
