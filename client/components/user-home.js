import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'

// presentational component
export const UserHome = props => {
  const {email, password} = props
  return (
    <div>
      <h3>Welcome, {email}</h3>
    </div>
  )
}

// container
const mapState = state => {
  return {
    user: state.user
  }
}

export default connect(mapState)(UserHome)

// prop types
UserHome.propTypes = {
  email: PropTypes.string
}
