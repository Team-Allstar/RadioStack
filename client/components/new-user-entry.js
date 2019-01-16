import React, {Component} from 'react'
import {connect} from 'react-redux'
import {withRouter, Redirect} from 'react-router-dom'
import {postUser} from '../store/user'
import SignUpForm from './sign-up-form'

class NewUserEntry extends Component {
  constructor(props) {
    super(props)
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      streetAddress1: '',
      streetAddress2: '',
      city: '',
      state: '',
      zipCode: '',
      phoneNumber: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  handleSubmit = event => {
    if (
      !this.state.firstName ||
      !this.state.lastName ||
      !this.state.email ||
      !this.state.password
    ) {
      alert(
        'You must enter a First Name, Last Name, Email Address, and Password to Sign Up.'
      )
    } else {
      event.preventDefault()
      this.props.postNewUser(this.state)
      this.setState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        streetAddress1: '',
        streetAddress2: '',
        city: '',
        state: '',
        zipCode: '',
        phoneNumber: ''
      })

      window.location.href = '/login'
    }
  }
  handleChange = event => {
    this.setState({
      [event.currentTarget.name]: event.currentTarget.value
    })
  }

  render() {
    return (
      <div>
        <SignUpForm
          {...this.state}
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
        />
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    postNewUser: user => {
      dispatch(postUser(user))
    }
  }
}

export default withRouter(connect(null, mapDispatchToProps)(NewUserEntry))
