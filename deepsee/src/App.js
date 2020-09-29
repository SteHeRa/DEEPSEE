import React, { useState }from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import './App.css';

import Nav from './Components/NavComponent'
import Log from './Components/LogBookComponent';
import Map from './Components/MapComponent';
import LandingPage from './Components/LandingPage';

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
    <Router>

    <Nav logClick={() => handleLogClick()} mapClick={() => handleMapClick()} showLog={isShowLog}/>

    <Switch>
      <Route path="/log">
        <Log />
      </Route>
      <Route path="/map">
        <Map />
      </Route>
      <Route path="/">
        <LandingPage />
      </Route>
    </Switch>
    </Router>
  )
}

export default App;
