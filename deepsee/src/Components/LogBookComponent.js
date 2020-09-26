import React from 'react';
import ReactDOM from 'react-dom';
import LogList from './LogListComponent';
import LogFormModal from './LogFormModal';

const logData = require('../mockLog.json');


function Log () {

  function openLogForm () {
    const modalRoot = document.getElementById('modal-root');
    const modalDiv = document.createElement('div');
    modalRoot.appendChild(modalDiv);
    return ReactDOM.render( //might be better to use ReactDOM.createPortal
      <LogFormModal closeModal={closeLogForm}/>,
      modalRoot
      )
  }

  function closeLogForm () {
    const modalRoot = document.getElementById('modal-root');
    return ReactDOM.render( //might be better to use ReactDOM.createPortal
      null,
      modalRoot
      )
  }

  return (
    <div className="log-book">
      <div className="add-dive-button" onClick={() => openLogForm()}>
        <div className="add-dive-button-plus">+</div>
        </div>
      <LogList log={logData}/>
    </div>
  )
}

export default Log;