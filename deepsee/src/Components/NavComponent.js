import React from 'react';

function Nav (props) {
  return(
    <div className="nav">
      <div className="navigation-buttons">
        <button onClick={() => props.logClick()} style={{backgroundColor: `${props.showLog ? "#fecf12" : "#eeeeee"}`}}>Log</button>
        <button onClick={() => props.mapClick()} style={{backgroundColor: `${props.showLog ? "#eeeeee" : "#fecf12"}`}}>Map</button>
      </div>
    </div>
  )
}

export default Nav;