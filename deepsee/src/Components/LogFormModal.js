import React from 'react';
import ApiClient from '../services/ApiClient';

function LogFormModal (props) {

  async function handleSubmit (e) {
    e.preventDefault();
    e.stopPropagation();
    const formData = new FormData();
    formData.append('country', e.target.country.value);
    formData.append('region', e.target.region.value);
    formData.append('diveSite', e.target.diveSite.value);
    formData.append('date', e.target.date.value);
    formData.append('notes', e.target.notes.value);
    formData.append('photos', e.target.photos.files[0]);
    ApiClient.postLog(formData);
  }

  return (
    <div className="modal-container" onClick={() => props.closeModal()}>
        <div className="modal" onClick={(e) => {
          e.stopPropagation();
        }}>
          <button onClick={() => props.closeModal()}>X</button>
          <div className="modal-content">
            <form className="new-log-form-item"  onSubmit={handleSubmit}>
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
              <div className="photo-preview"></div>
              <input type="file" id="photos" name="photos" accept="image/png, image/jpeg"/>
              <input type="submit"/>
            </form>
          </div>
        </div>
      </div>
  )
}

export default LogFormModal;