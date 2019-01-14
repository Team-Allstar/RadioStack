import React, {Component} from 'react'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import {postUser} from '../store/user'
import SignUpForm from './signUpForm'

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
