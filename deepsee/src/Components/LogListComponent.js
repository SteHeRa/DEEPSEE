import React from 'react';
import LogListItem from './LogListItemComponent';

function LogList (props) {
  return (
    <div className="log-list">
      {props.log.map( dive => {
        return <LogListItem dive={dive}/> //set up keys when database fully connected
      })}
    </div>
  )
}

export default LogList;