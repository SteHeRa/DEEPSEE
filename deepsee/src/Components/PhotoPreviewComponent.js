import React from "react";

function PhotoPreviewComponent({ photo }) {
  function openImage(url) {
    window.open(url);
  }

  return (
      <img
        className="photo-component-image"
        src={photo.URL}
        alt="Image from dive site"
        onClick={() => openImage(photo.URL)}
      />
  );
}

export default PhotoPreviewComponent;