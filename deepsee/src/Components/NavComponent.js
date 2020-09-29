import React from "react";
import { Link, useLocation } from "react-router-dom";

function Nav(props) {
  return (
    <div className="nav">
      <div className="navigation-buttons">
        <Link to="/log-book">
          <button
            onClick={() => props.logClick()}
            style={{
              backgroundColor: `${
                useLocation().pathname == "/log-book" ? "#fecf12" : "#eeeeee"
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
                useLocation().pathname == "/map" ? "#fecf12" : "#eeeeee"
              }`,
            }}
          >
            Map
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Nav;
