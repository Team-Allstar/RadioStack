import React from 'react'
import {Button} from 'semantic-ui-react'
import {Link} from 'react-router-dom'

// Might need HtmlFor in the label ex. htmlFor="firstName"

const SignUpForm = props => {
  return (
    <div>
      <div className="ui form">
        <form onSubmit={props.handleSubmit}>
          <div className="one fields">
            <div className="field error">
              <label>First Name*</label>
              <input
                type="text"
                onChange={props.handleChange}
                name="firstName"
                value={props.firstName}
                placeholder="First Name"
              />
            </div>
            <div className="field error">
              <label>Last Name*</label>
              <input
                type="text"
                onChange={props.handleChange}
                name="lastName"
                value={props.lastName}
                placeholder="Last Name"
              />
            </div>
          </div>
          <div className="one fields">
            <div className="field error">
              <label>Email*</label>
              <input
                type="text"
                onChange={props.handleChange}
                name="email"
                value={props.email}
                placeholder="Email"
              />
            </div>
            <div className="field error">
              <label>Password*</label>
              <div className="ui left icon input">
                <input
                  type="password"
                  onChange={props.handleChange}
                  name="password"
                  value={props.password}
                />
                <i className="lock icon" />
              </div>
            </div>
          </div>
          <div className="two fields">
            <div className="field">
              <label>Street Address 1</label>
              <input
                type="text"
                onChange={props.handleChange}
                name="streetAddress1"
                value={props.streetAddess1}
                placeholder="Street Address 1"
              />
            </div>
          </div>
          <div className="two fields">
            <div className="field">
              <label>Street Address 2</label>
              <input
                type="text"
                onChange={props.handleChange}
                name="streetAddress2"
                value={props.streetAddress2}
                placeholder="Street Address 2"
              />
            </div>
          </div>
          <div className="one fields">
            <div className="field">
              <label>City</label>
              <input placeholder="City" type="text" />
            </div>
            <div className="field">
              <label>State</label>
              <input
                type="text"
                onChange={props.handleChange}
                name="state"
                value={props.state}
                placeholder="State"
              />
            </div>
            <div className="field">
              <label>Zip Code</label>
              <input
                type="text"
                onChange={props.handleChange}
                name="zipCode"
                value={props.zipCode}
                placeholder="Zip Code"
              />
            </div>
          </div>
          <div className="one fields">
            <div className="field">
              <label>Phone Number</label>
              <input
                type="text"
                onChange={props.handleChange}
                name="phoneNumber"
                value={props.phoneNumber}
                placeholder="Phone Number"
              />
            </div>
          </div>
          <div>
            <button className="positive ui button" type="submit">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default SignUpForm

{
  /* <div id="signUpForm">
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
    </div> */
}
