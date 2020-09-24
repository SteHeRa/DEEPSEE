import React from 'react';

function Nav (props) {
  return(
    <div className="nav">
      <div className="navigation-buttons">
        <button onClick={() => props.logClick()}>Log</button>
        <button onClick={() => props.mapClick()}>Map</button>
      </div>
    </div>
  )
}

export default Nav;