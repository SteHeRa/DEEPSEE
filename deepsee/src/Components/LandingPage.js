import React from 'react';

function LandingPage () {
  return(
    <div className="landing-page">
      <h1>Create Account</h1>
      <form className="form-item">
        <label>First Name:</label>
        <input></input>
        <label>Last Name:</label>
        <input></input>
        <label>Email:</label>
        <input></input>
        <label>Password:</label>
        <input></input>
        <input className="submit-btn" type="submit"/>
      </form>
      <div className="have-account">already have an account? <a href="">Log In</a></div>
    </div>
  )
}

export default LandingPage