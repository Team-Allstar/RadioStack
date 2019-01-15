import React from 'react'
import {Link} from 'react-router-dom'

// Might need HtmlFor in the label ex. htmlFor="firstName"

const GuestCheckoutForm = props => {
  return (
    <div id="signUpForm">
      <form onSubmit={props.handleSubmit}>
        <h1>PLEASE FILL IN YOUR INFORMATION</h1>
        <label>
          First Name* :
          <input
            type="text"
            onChange={props.handleChange}
            name="firstName"
            value={props.firstName}
          />
        </label>
        <label>
          Last Name* :
          <input
            type="text"
            onChange={props.handleChange}
            name="lastName"
            value={props.lastName}
          />
        </label>
        <label>
          E-Mail* :
          <input
            type="text"
            onChange={props.handleChange}
            name="email"
            value={props.email}
          />
        </label>
        <button type="submit">SUBMIT</button>
      </form>
      <p>*required</p>
    </div>
  )
}

export default GuestCheckoutForm
