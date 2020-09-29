import React from 'react';
import {Link} from 'react-router-dom';

function LogInPage () {
  return(
    <div className="landing-page">
    <h1>Log In</h1>
    <form className="form-item">
      <label>Email:</label>
      <input></input>
      <label>Password:</label>
      <input></input>
      <input className="submit-btn" type="submit"/>
    </form>
    <div className="have-account">don&apos;t have an account? <Link to="/">Create Account</Link></div>
  </div>
  )
}

export default LogInPage