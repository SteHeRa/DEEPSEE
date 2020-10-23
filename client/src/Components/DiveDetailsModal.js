import React from "react";

function DiveDetailsModal(props) {
  function openImage(url) {
    window.open(url);
  }

  return (
    <div className="modal-container" onClick={() => props.closeModal()}>
      <div
        className="modal"
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <button
          className="close-modal-button"
          onClick={() => props.closeModal()}
        >
          X
        </button>
        <div className="modal-content">
          <div className="dive-details">
            <div>{props.dive.diveSite}</div>
            <div>{`${props.dive.country} - ${props.dive.region}`}</div>
            <div>{new Date(props.dive.date).toDateString()}</div>
            <div>Dive Stats:</div>
            <div className="dive-stats">
              <div> Max Depth: {props.dive.maxDepth} m</div>
              <div> Avg Depth: {props.dive.avgDepth} m</div>
              <div> Dive Time: {props.dive.diveTime}</div>
              <div> Temp: {props.dive.temp}&deg;C</div>
              <div> Visibility: {props.dive.visibility} m</div>
            </div>
            <div>Notes:</div>
            <div className="dive-notes">{props.dive.notes}</div>
            <img
              className="photo-component-image"
              src={props.dive.photos}
              onClick={() => openImage(props.dive.photos)}
              alt={"dive site"}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default DiveDetailsModal;
