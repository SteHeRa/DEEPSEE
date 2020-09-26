import React from 'react';
import ApiClient from '../services/ApiClient';

function LogFormModal (props) {

  async function handleSubmit (e) {
    e.preventDefault();
    const photos = document.getElementById('photos').files;
    if (photos.length !== 0) {
      console.log(photos);
      await ApiClient.postPhotos(photos);
      console.log('there were photos');
    } else console.log('there were no photos');
    await ApiClient.postLog();
  };

  return (
    <div className="modal-container" onClick={() => props.closeModal()}>
        <div className="modal" onClick={(e) => {
          e.stopPropagation();
        }}>
          <button onClick={() => props.closeModal()}>X</button>
          <div className="modal-content">
            <form className="new-log-form-item" /*onSubmit={e => handleSubmit(e)}*/ enctype="multipart/form-data" action="http://localhost:3001/photos" method="post">
              <h3>Add a new dive</h3>
              <label htmlFor="country">Country: </label>
              <input type="text" name="country" defaultValue=""/>
              <label htmlFor="region">Region: </label>
              <input type="text" name="region" defaultValue=""/>
              <label htmlFor="diveSite">Dive Site: </label>
              <input type="text" name="diveSite" defaultValue=""/>
              <label htmlFor="date">Date: </label>
              <input type="date" name="date" defaultValue=""/>
              <label htmlFor="notes">Notes: </label>
              <input type="text" name="notes" defaultValue=""/>
              <label htmlFor="photos">Photos: </label>
              <div className="photo-preview">
                {}
              </div>
              <input type="file" id="photos" name="photos" accept="image/png, image/jpeg" multiple/>
              <input type="submit"/>
            </form>
          </div>
        </div>
      </div>
  )
}

export default LogFormModal;