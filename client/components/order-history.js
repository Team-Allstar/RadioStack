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
    await this.props.fetchOrderHistory(this.props.match.params.id)
  }

  render() {
    console.log(this.props.match.params.id)
    return (
      <div id="order-history">
        <h1>Test</h1>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  falseCart: state.falseCart
})

const mapDispatch = dispatch => ({
  fetchOrderHistory: id => {
    dispatch(fetchOrderHistory(id))
  }
})

export default connect(mapStateToProps, mapDispatch)(OrderHistory)
