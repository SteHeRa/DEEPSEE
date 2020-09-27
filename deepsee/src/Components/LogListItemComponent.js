import React from 'react';

function LogListItem (props) {
  return (
    <div className="log-list-item">
      <div className="log-list-item-details">
  <h3 className="dive-site">{props.dive.diveSite}</h3>
  <h3 className="country-region">{`${props.dive.country} - ${props.dive.region}`}</h3>
  <h3 className="date">{new Date(props.dive.date).toDateString()}</h3>
      </div>
      <div className="log-list-item-image-container">
        <img className="log-list-item-image" src={props.dive.photos[0]} alt="Dive Thumbnail"/>
      </div>
    </div>
  )
}

export default LogListItem;