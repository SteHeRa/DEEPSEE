import React, { useState, useEffect } from "react";
import ApiClient from "../services/ApiClient";

import DiveSitePhoto from "./DiveSitePhotoComponent";

function DiveSiteModal({ closeModal, diveSite }) {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    makePhotoList(diveSite);
  }, [diveSite]);

  function makePhotoList(diveSite) {
    ApiClient.getPhotos(diveSite).then((photos) => {
      if (photos[0] !== undefined) {
        photos.sort((a, b) => b.date - a.date);
        setPhotos(photos);
      } else setPhotos([]);
    });
  }

  return (
    <div className="modal-container" onClick={() => closeModal()}>
      <div
        className="modal"
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
        }}
      >
        <button className="close-modal-button" onClick={() => closeModal()}>
          X
        </button>
        <div className="modal-content">
          {photos.map((photo) => (
            <DiveSitePhoto key={photo.URL} photo={photo} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default DiveSiteModal;
