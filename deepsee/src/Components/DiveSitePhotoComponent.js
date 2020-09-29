import React from "react";

function DiveSitePhoto({ photo }) {
  return (
    <div className="photo-component">
      <img
        className="photo-component-image"
        src={photo}
        alt="Image from dive site"
      />
    </div>
  );
}

export default DiveSitePhoto;
