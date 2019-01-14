import React from 'react'
import {Link} from 'react-router-dom'

// Might need HtmlFor in the label ex. htmlFor="firstName"

const SignUpForm = props => {
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
        <label>
          Password* :
          <input
            type="text"
            onChange={props.handleChange}
            name="password"
            value={props.password}
          />
        </label>
        <label>
          Street Address 1 :
          <input
            type="text"
            onChange={props.handleChange}
            name="streetAddress1"
            value={props.streetAddess1}
          />
        </label>
        <label>
          Street Address 2 :
          <input
            type="text"
            onChange={props.handleChange}
            name="streetAddress2"
            value={props.streetAddress2}
          />
        </label>
        <label>
          City :
          <input
            type="text"
            onChange={props.handleChange}
            name="city"
            value={props.city}
          />
        </label>
        <label>
          State :
          <input
            type="text"
            onChange={props.handleChange}
            name="state"
            value={props.state}
          />
        </label>
        <label>
          Zip Code :
          <input
            type="text"
            onChange={props.handleChange}
            name="zipCode"
            value={props.zipCode}
          />
        </label>
        <label>
          Phone Number :
          <input
            type="text"
            onChange={props.handleChange}
            name="phoneNumber"
            value={props.phoneNumber}
          />
        </label>
        <button type="submit">SUBMIT</button>
      </form>
      <p>*required</p>
    </div>
  )
}

export default SignUpForm
