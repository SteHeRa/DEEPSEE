import React, { useState, useEffect }from 'react';
import ReactDOM from 'react-dom';
import LogList from './LogListComponent';
import LogFormModal from './LogFormModal';
import ApiClient from '../services/ApiClient';

function Log () {

  const [ logData, setLogData ] = useState([])

  useEffect( () => makeLogList(), []) //TODO refactor so log list is updated every time an item is added

  function makeLogList() {
    ApiClient.getLogs()
      .then( logList => {
        if (logList[0] !== undefined) {
          logList.sort((a, b) => b.date - a.date); //TODO sort logs made on the same day by most recently posted
          setLogData(logList);
        } else setLogData([]);
      });
  }

  function openLogForm () {
    const modalRoot = document.getElementById('modal-root');
    const modalDiv = document.createElement('div');
    modalRoot.appendChild(modalDiv);
    ReactDOM.render( //might be better to use ReactDOM.createPortal
      <LogFormModal makeLogList={() => makeLogList()} closeModal={closeLogForm}/>,
      modalRoot
      )
  }

  function closeLogForm () {
    const modalRoot = document.getElementById('modal-root');
    ReactDOM.render( //might be better to use ReactDOM.createPortal
      null,
      modalRoot
      )
  }

  return (
    <div className="log-book">
      <div id="add-dive-button" onClick={() => openLogForm()}>
        <div id="add-dive-button-plus">+</div>
        </div>
      <LogList log={logData}/>
    </div>
  )
}

export default Log;