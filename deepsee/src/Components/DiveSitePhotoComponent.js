import React from "react";

function DiveSitePhoto({ photo }) {
  return (
    <div className="photo-component">
      <img
        className="photo-component-image"
        src={photo.URL}
        alt="Image from dive site"
      />
      <div className="photo-data">
        <div className="photo-conditions">
          Visibility: {photo.visibility} m - Temperature: {photo.temp}&deg;C
        </div>
        <div className="photo-date">{new Date(photo.date).toDateString()}</div>
      </div>
    </div>
  );
}

export default DiveSitePhoto;
