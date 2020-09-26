import React, { useState }from 'react';
import './App.css';

import Nav from './Components/NavComponent'
import Log from './Components/LogBookComponent';
import Map from './Components/MapComponent';

function App () {

  const [isShowLog, setIsShowLog] = useState(true);

  function handleLogClick () {
    if (!isShowLog) {
      setIsShowLog(true);
    }
  }

  function handleMapClick () {
    if (isShowLog) {
      setIsShowLog(false);
    }
  }

  return (
    <div className="app">
      <Nav logClick={() => handleLogClick()} mapClick={() => handleMapClick()} showLog={isShowLog}/>
      {isShowLog ?
      <Log /> :
      <Map className="map"/>}
    </div>
  )
}

export default App;
