import React from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import {auth} from '../store'
import {Button} from 'semantic-ui-react'
import {Link} from 'react-router-dom'
/**
 * COMPONENT
 */
const AuthForm = props => {
  const {name, displayName, handleSubmit, error} = props

  return (
    <div className="ui placeholder segment">
      <form onSubmit={handleSubmit} name={name}>
        <div className="ui two column very relaxed stackable grid">
          <div className="column">
            <div className="ui form">
              <div className="field">
                <label htmlFor="email">Email</label>
                <div className="ui left icon input">
                  <input type="text" placeholder="Email" name="email" />
                  <i className="user icon" />
                </div>
              </div>

              <div className="field">
                <label>Password</label>
                <div className="ui left icon input">
                  <input name="password" type="password" />
                  <i className="lock icon" />
                </div>
              </div>

              <div>
                <button className="positive ui button" type="submit">
                  {displayName}
                </button>
              </div>
            </div>
          </div>

          <div className="middle aligned column">
            {/* <div class="ui big button">
              <i class="signup icon" />
              Sign Up
            </div> */}
            <div className="column">
              <div className="ui form">
                <div className="field">
                  <Button href="/auth/google" className="ui google plus button">
                    <i className="google plus icon" />
                    {displayName} with Google
                  </Button>
                </div>
                <div className="field">
                  <Button as={Link} to="/signup" type="button">
                    Sign Up!
                  </Button>
                </div>
              </div>
            </div>
          </div>
          {error && error.response && <div> {error.response.data} </div>}
        </div>
        <div className="ui vertical divider">Or</div>
      </form>
    </div>
  )
}

/**
 * CONTAINER
 *   Note that we have two different sets of 'mapStateToProps' functions -
 *   one for Login, and one for Signup. However, they share the same 'mapDispatchToProps'
 *   function, and share the same Component. This is a good example of how we
 *   can stay DRY with interfaces that are very similar to each other!
 */
const mapLogin = state => {
  return {
    name: 'login',
    displayName: 'Login',
    error: state.user.error
  }
}

const mapSignup = state => {
  return {
    name: 'signup',
    displayName: 'Sign Up',
    error: state.user.error
  }
}

const mapDispatch = (dispatch, ownProps) => {
  return {
    handleSubmit(evt) {
      evt.preventDefault()
      const formName = evt.target.name
      const email = evt.target.email.value
      const password = evt.target.password.value
      const check = auth(email, password, formName)
      if (check) {
        dispatch(check)
      } else {
        alert('Please fill in Email and Password field.')
      }
    }
  }
}

// .then(() => {
//   ownProps.history.push('/')
// const LoginClickHandler = () => {
//   if (this.state.cart === 0) {
//     alert('Please fill in Email and Password field.')
//     return
//   }

//   if (this.props.cart[0] && this.props.cart[0].OrderedProducts) {
//     this.props.checkoutCart(this.props.cart[0].id)
//     window.location = `/thank-you`
//   } else {
//     alert('Incorrect Email or Password.')
//   }
// }

export const Login = connect(mapLogin, mapDispatch)(AuthForm)
export const Signup = connect(mapSignup, mapDispatch)(AuthForm)

/**
 * PROP TYPES
 */
AuthForm.propTypes = {
  name: PropTypes.string.isRequired,
  displayName: PropTypes.string.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  error: PropTypes.object
}
