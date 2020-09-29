import React, { useState } from "react";
import ApiClient from "../services/ApiClient";

import DiveSitePhoto from "./DiveSitePhotoComponent";

function LogFormModal(props) {
  const [photoPreviews, setPhotoPreviews] = useState([]);

  function handleChange(e) {
    const photos = [];
    for (let i = 0; i < e.target.files.length; i++) {
      photos.push({ URL: URL.createObjectURL(e.target.files[i]) }); //handing in object because of how DiveSitePhoto component expects props
    }
    setPhotoPreviews(photos);
  }

  async function handleSubmit(e) {
    e.preventDefault();
    e.stopPropagation();
    const formData = new FormData();
    formData.append("country", e.target.country.value);
    formData.append("region", e.target.region.value);
    formData.append("diveSite", e.target.diveSite.value);
    formData.append("date", e.target.date.value);
    formData.append("maxDepth", e.target.maxDepth.value);
    formData.append("avgDepth", e.target.avgDepth.value);
    formData.append("diveTime", e.target.diveTime.value);
    formData.append("temp", e.target.temp.value);
    formData.append("visibility", e.target.visibility.value);
    formData.append("notes", e.target.notes.value);
    formData.append("photos", e.target.photos.files[0]);
    ApiClient.postLog(formData).then(() => props.makeLogList());
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
          <form className="form-item" onSubmit={handleSubmit}>
            <h1>Add a new dive</h1>
            <label htmlFor="country">Country (required): </label>
            <input type="text" name="country" defaultValue="" />
            <label htmlFor="region">Region (required): </label>
            <input type="text" name="region" defaultValue="" />
            <label htmlFor="diveSite">Dive Site (required): </label>
            <input type="text" name="diveSite" defaultValue="" />
            <label htmlFor="date">Date (required): </label>
            <input type="date" name="date" defaultValue="" />
            <label htmlFor="maxDepth">Maximum Depth (m): </label>
            <input type="text" name="maxDepth" defaultValue="" />
            <label htmlFor="avgDepth">Average Depth (m): </label>
            <input type="text" name="avgDepth" defaultValue="" />
            <label htmlFor="diveTime">Dive Time: </label>
            <input
              type="text"
              name="diveTime"
              defaultValue=""
              placeholder="0h:0m"
            />
            <label htmlFor="temp">Temperature (&deg;C): </label>
            <input type="text" name="temp" defaultValue="" />
            <label htmlFor="visibility">Visibility (m): </label>
            <input type="text" name="visibility" defaultValue="" />
            <label htmlFor="notes">Notes: </label>
            <textarea
              id="notes"
              defaultValue=""
              className="notes-input"
            ></textarea>
            <label>Photos: </label>
            <div className="photo-preview">
              {photoPreviews.map((photo) => (
                <DiveSitePhoto
                  key={photo}
                  photo={photo}
                  className="photo-preview-item"
                />
              ))}
            </div>
            <label htmlFor="photos" className="custom-style-file-input">
              Add Photos
              <input
                type="file"
                id="photos"
                name="photos"
                accept="image/png, image/jpeg"
                onChange={handleChange}
              />
            </label>
            <input className="submit-btn" type="submit" />
          </form>
        </div>
      </div>
    </div>
  );
}

export default LogFormModal;
