import React from "react";
import { Link, useLocation } from "react-router-dom";

function Nav(props) {
  return (
    <div className="nav">
      <img className="nav-logo" src="DEEPSEE_logo.png" alt="logo" />
      <div className="nav-logo-text">DEEPSEE</div>
      <div className="navigation-buttons">
        <Link to="/log-book">
          <button
            onClick={() => props.logClick()}
            style={{
              backgroundColor: `${
                useLocation().pathname === "/log-book" ? "#fecf12" : "#eeeeee"
              }`,
            }}
          >
            Log
          </button>
        </Link>
        <Link to="/map">
          <button
            onClick={() => props.mapClick()}
            style={{
              backgroundColor: `${
                useLocation().pathname === "/map" ? "#fecf12" : "#eeeeee"
              }`,
            }}
          >
            Map
          </button>
        </Link>
      </div>
      <div></div>
    </div>
  );
}

export default Nav;
