import React from 'react';
import {Link} from 'react-router-dom';

function LandingPage () {
  return(
    <div className="landing-page">
      <h1>Create Account</h1>
      <form className="form-item">
        <label htmlFor="firstName">First Name:</label>
        <input type="text" name="firstName" defaultValue=""></input>
        <label htmlFor="lastName">Last Name:</label>
        <input type="text" name="lastName" defaultValue=""></input>
        <label htmlFor="email">Email:</label>
        <input type="text" name="email" defaultValue=""></input>
        <label htmlFor="password">Password:</label>
        <input type="password" name="password" defaultValue=""></input>
        <label htmlFor="passwordCheck">Repeat Password:</label>
        <input type="password" name="passwordCheck" defaultValue=""></input>
        <input className="submit-btn" type="submit"/>
      </form>
      <div className="have-account">already have an account? <Link to="/log-in">Log In</Link></div>
    </div>
  )
}

export default LandingPage