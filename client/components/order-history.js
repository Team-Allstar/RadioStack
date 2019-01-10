import React, {Component} from 'react'
import {connect} from 'react-redux'
// import { Link } from 'react-router.dom'
import {fetchOrderHistory} from '../store/order-history'

// const OrderHistory = ({handleClick, isLoggedIn}) => {
//   return (
//     <div id="order-history">
//       <p>OrderHistory</p>
//     </div>
//   )
// }

class OrderHistory extends Component {
  async componentDidMount() {
    await this.props.fetchOrderHistory()
  }

  render() {
    return <div>Test</div>
  }
}

const mapDispatch = dispatch => ({
  fetchOrderHistory: () => {
    dispatch(fetchOrderHistory())
  }
})

export default connect(null, mapDispatch)(OrderHistory)
