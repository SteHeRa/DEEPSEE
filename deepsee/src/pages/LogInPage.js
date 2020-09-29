import React from "react";
import { Link, useHistory } from "react-router-dom";

function LogInPage() {
  let history = useHistory();

  function goToLogBook() {
    history.push("/log-book");
  }

  return (
    <div className="landing-page">
      <h1>Log In</h1>
      <form className="form-item" onSubmit={goToLogBook}>
        <label htmlFor="email">Email:</label>
        <input type="text" name="email" defaultValue=""></input>
        <label htmlFor="password">Password:</label>
        <input type="password" name="password" defaultValue=""></input>
        <input className="submit-btn" type="submit" />
      </form>
      <div className="have-account">
        don&apos;t have an account? <Link to="/">Create Account</Link>
      </div>
    </div>
  );
}

export default LogInPage;
