import React from 'react'

const ThankYou = () => {
  return (
    <div id="thank-you">
      <h1>Thank you for your purchase!</h1>
    </div>
  )
}

/**
 * CONTAINER
 */

export default ThankYou

/* <div id="authform">
  <form onSubmit={handleSubmit} name={name}>
    <div>
      <label htmlFor="email">
        <small>Email</small>
      </label>
      <input name="email" type="text" />
    </div>


    <div>
      <label htmlFor="password">
        <small>Password</small>
      </label>
      <input name="password" type="password" />
    </div>


    <button class="positive ui button">Positive Button</button>

    <div type ="submit">
    <button class="positive ui button">Positive Button</button>
    </div>


    {error && error.response && <div> {error.response.data} </div>}
  </form>
  <Button href="/auth/google" className="ui google plus button">
    <i className="google plus icon" />
    {displayName} with Google
  </Button>
  <Button as={Link} to="/signup" type="button">
    Sign Up!
  </Button>

  {/* <form method="get" action="/auth/google">
    <button type="submit">Login in With Google</button>
  // </form> */
// </div> */}
