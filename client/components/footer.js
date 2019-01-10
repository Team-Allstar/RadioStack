import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {logout} from '../store'

const Footer = ({handleClick, isLoggedIn}) => (
  <div id="footer">
    <p>
      &copy; 2019{' '}
      <Link className="footer-link" to="/">
        RadioStack
      </Link>
    </p>
  </div>
)

/**
 * CONTAINER
 */

export default Footer

/**
 * PROP TYPES
 */
