import React from "react";
import { Link } from "react-router-dom";

function Nav(props) {
  return (
    <div className="nav">
      <div className="navigation-buttons">
        <Link to="/log-book">
          <button
            onClick={() => props.logClick()}
            style={{
              backgroundColor: `${props.showLog ? "#fecf12" : "#eeeeee"}`,
            }}
          >
            Log
          </button>
        </Link>
        <Link to="/map">
          <button
            onClick={() => props.mapClick()}
            style={{
              backgroundColor: `${props.showLog ? "#eeeeee" : "#fecf12"}`,
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
