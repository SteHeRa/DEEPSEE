import React, { useState }from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import './App.css';

import Nav from './Components/NavComponent'
import LandingPage from './pages/LandingPage';
import LogInPage from './pages/LogInPage';
import Log from './pages/LogBookPage';
import Map from './pages/MapPage';

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
      <Switch>
        <Route path="/log-in">
          <LogInPage />
        </Route>
        <Route path="/log-book">
          <Nav logClick={() => handleLogClick()} mapClick={() => handleMapClick()} showLog={isShowLog}/>
          <Log />
        </Route>
        <Route path="/map">
          <Nav logClick={() => handleLogClick()} mapClick={() => handleMapClick()} showLog={isShowLog}/>
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
