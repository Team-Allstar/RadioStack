import React, {Component} from 'react'
import {connect} from 'react-redux'
import {fetchOrderHistory} from '../store/order-history'
import {Products} from '.'

class OrderHistory extends Component {
  async componentDidMount() {
    await this.props.fetchOrderHistory(this.props.userId)
  }

  render() {
    return (
      <div id="order-history">
        <div>
          <h1>Order History:</h1>
        </div>
        {/* 
        THIS WORKS
        {this.props.orderHistory.map(el => {
          return <div key={el.id}>{el.id}</div>
        })} */}

        {this.props.orderHistory[0]
          ? this.props.orderHistory[0].OrderedProducts.map(el => {
              return (
                <div>
                  <div key={el.id}>Price: {el.pricePaid}</div>
                  <div key={el.id}>Id: {el.id}</div>
                  <div key={el.id}>{el.id}</div>
                </div>
              )
            })
          : 'loading'}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  userId: state.user.id,
  orderHistory: state.orderHistory
})

const mapDispatch = dispatch => ({
  fetchOrderHistory: id => {
    dispatch(fetchOrderHistory(id))
  }
})

export default connect(mapStateToProps, mapDispatch)(OrderHistory)
