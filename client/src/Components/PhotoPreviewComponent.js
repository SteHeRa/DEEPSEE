import React from "react";

function PhotoPreviewComponent({ photo }) {
  function openImage(url) {
    window.open(url);
  }

  return (
    <img
      aria-label="photo preview image"
      className="photo-component-image"
      src={photo.URL}
      alt="dive site"
      onClick={() => openImage(photo.URL)}
    />
  );
}

export default PhotoPreviewComponent;
