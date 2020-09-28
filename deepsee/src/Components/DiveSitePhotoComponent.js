import React from 'react';

function DiveSitePhoto ({photo}) {

  console.log(photo);
  return (
  <div className="photo-component">
    <img className="photo-component-image"src={photo} alt="Image from dive site"/>
  </div>
  );

}

export default DiveSitePhoto;