import React from "react";

function DiveDetailsModal(props) {
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
          <h3>{props.dive.diveSite}</h3>
          <h3>{`${props.dive.country} - ${props.dive.region}`}</h3>
          <h3>{new Date(props.dive.date).toDateString()}</h3>
          <p>{props.dive.notes}</p>
          <img className="photo-component-image" src={props.dive.photos} />
        </div>
      </div>
    </div>
  );
}

export default DiveDetailsModal;
