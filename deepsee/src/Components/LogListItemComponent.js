import React from 'react';

function LogListItem (props) {
  return (
    <div className="log-list-item" onClick={() => props.openDetails(props.dive)}>
      <div className="log-list-item-details">
  <div className="dive-site">{props.dive.diveSite}</div>
  <div className="country-region">{`${props.dive.country} - ${props.dive.region}`}</div>
  <div className="date">{new Date(props.dive.date).toDateString()}</div>
      </div>
      <div className="log-list-item-image-container">
        <img className="log-list-item-image" src={props.dive.photos[0]} alt="Dive Thumbnail"/>
      </div>
    </div>
  )
}

export default LogListItem;