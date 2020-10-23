import React, { useState } from "react";
import ApiClient from "../services/ApiClient";

import PhotoPreviewComponent from "./PhotoPreviewComponent";

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

    e.target.country.value = null;
    e.target.region.value = null;
    e.target.diveSite.value = null;
    e.target.date.value = null;
    e.target.maxDepth.value = null;
    e.target.avgDepth.value = null;
    e.target.diveTime.value = null;
    e.target.temp.value = null;
    e.target.visibility.value = null;
    e.target.notes.value = null;
    e.target.photos.files = null;
    document.getElementById("photo-preview").innerHTML = null;
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
            <input
              aria-label="country input"
              type="text"
              name="country"
              defaultValue=""
            />
            <label htmlFor="region">Region (required): </label>
            <input
              aria-label="region input"
              type="text"
              name="region"
              defaultValue=""
            />
            <label htmlFor="diveSite">Dive Site (required): </label>
            <input
              aria-label="dive site input"
              type="text"
              name="diveSite"
              defaultValue=""
            />
            <label htmlFor="date">Date (required): </label>
            <input
              aria-label="date input"
              type="date"
              name="date"
              defaultValue=""
            />
            <label htmlFor="maxDepth">Maximum Depth (m): </label>
            <input
              aria-label="max depth input"
              type="text"
              name="maxDepth"
              defaultValue=""
            />
            <label htmlFor="avgDepth">Average Depth (m): </label>
            <input
              aria-label="average depth input"
              type="text"
              name="avgDepth"
              defaultValue=""
            />
            <label htmlFor="diveTime">Dive Time: </label>
            <input
              aria-label="dive time input"
              type="text"
              name="diveTime"
              defaultValue=""
              placeholder="0h:0m"
            />
            <label htmlFor="temp">Temperature (&deg;C): </label>
            <input
              aria-label="temperature input"
              type="text"
              name="temp"
              defaultValue=""
            />
            <label htmlFor="visibility">Visibility (m): </label>
            <input
              aria-label="visibility input"
              type="text"
              name="visibility"
              defaultValue=""
            />
            <label htmlFor="notes">Notes: </label>
            <textarea
              aria-label="notes input"
              id="notes"
              defaultValue=""
              className="notes-input"
            ></textarea>
            <label>Photos: </label>
            <div
              aria-label="photo preview"
              id="photo-preview"
              className="photo-preview"
            >
              {photoPreviews.map((photo) => (
                <PhotoPreviewComponent
                  key={photo}
                  photo={photo}
                  className="photo-preview-item"
                /> //This needs to be a new component
              ))}
            </div>
            <label htmlFor="photos" className="custom-style-file-input">
              Add Photos
              <input
                aria-label="add photo input"
                type="file"
                id="photos"
                name="photos"
                accept="image/png, image/jpeg"
                onChange={handleChange}
              />
            </label>
            <input
              aria-label="submit button"
              className="submit-btn"
              type="submit"
            />
          </form>
        </div>
      </div>
    </div>
  );
}

export default LogFormModal;
