import React, {Component} from 'react'
import {connect} from 'react-redux'
import {fetchOrderHistory} from '../store/order-history'
import {Link} from 'react-router-dom'

class OrderHistory extends Component {
  async componentDidMount() {
    await this.props.fetchOrderHistory(this.props.userId)
  }

  render() {
    return (
      <div id="order-history">
        <div id="title">
          <h1>Order History:</h1>
        </div>
        <div>
          {this.props.orderHistory[0]
            ? this.props.orderHistory.map(order => {
                let total = 0

                total = order.OrderedProducts.reduce((accum, curr) => {
                  return accum + Number(curr.quantity) * Number(curr.pricePaid)
                }, 0)

                return (
                  <div>
                    <h1 style={{marginTop: '30px'}}>
                      <u>Order Number: {order.id}</u>
                    </h1>

                    {order.OrderedProducts.map(el => {
                      return (
                        <div>
                          <Link to={`/products/${el.Product.id}`}>
                            <img
                              key={`A${el.id}`}
                              src={el.Product.imageUrl}
                              width="100px"
                            />

                            <div key={`B${el.id}`}>
                              Item: {el.Product.productName}
                            </div>
                            <div key={`C${el.id}`}>
                              Price paid: ${(el.pricePaid / 100).toFixed(2)}
                            </div>
                            <div key={`D${el.id}`}>Quantity: {el.quantity}</div>
                            <div key={`E${el.id}`}>
                              Extended Price: ${' '}
                              {(
                                Number(el.quantity) * Number(el.pricePaid / 100)
                              ).toFixed(2)}
                            </div>
                          </Link>
                        </div>
                      )
                    })}
                    <h3>Order Total: ${`${(total / 100).toFixed(2)}`}</h3>
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
