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
        <div>
          {this.props.orderHistory[0]
            ? this.props.orderHistory.map(order => {
                return (
                  <div>
                    <h2>Order Number: {order.id}</h2>

                    {order.OrderedProducts.map(el => {
                      return (
                        <div>
                          <img src={el.Product.imageUrl} width="100px" />

                          <div key={el.id}>Item: {el.Product.productName}</div>
                          <div key={el.id}>Price paid: {el.pricePaid}</div>
                        </div>
                      )
                    })}
                  </div>
                )
              })
            : 'You have not made any previous purchases'}
        </div>
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
