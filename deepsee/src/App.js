import React, { useState }from 'react';
import './App.css';

import Nav from './Components/NavComponent'
import Log from './Components/LogBookComponent';
import Map from './Components/MapComponent';

function App () {

  const [showLog, setShowLog] = useState(true);

  function handleLogClick () {
    if (!showLog) {
      setShowLog(true);
    }
  }

  function handleMapClick () {
    if (showLog) {
      setShowLog(false);
    }
  }

  return (
    <div className="app">
      <Nav logClick={() => handleLogClick()} mapClick={() => handleMapClick()}/>
      {showLog ?
      <Log /> :
      <Map className="map"/>}
    </div>
  )
}

export default App;
