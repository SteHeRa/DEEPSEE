import React, { useState }from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import './App.css';

import Nav from './Components/NavComponent'
import LandingPage from './Components/LandingPage';
import LogInPage from './Components/LogInComponent';
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
      <Router>

      <Nav logClick={() => handleLogClick()} mapClick={() => handleMapClick()} showLog={isShowLog}/>

      <Switch>
        <Route path="/log-in">
          <LogInPage />
        </Route>
        <Route path="/log-book">
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
    </div>
  )
}

export default App;
