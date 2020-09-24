import React from 'react';
import LogList from './LogListComponent';

const logData = require('../mockLog.json');


function Log () {
  return (
    <div className="log-book">
      <div className="add-dive-button">
        <div className="add-dive-button-plus">+</div>
        </div>
      <LogList log={logData}/>
    </div>
  )
}

export default Log;