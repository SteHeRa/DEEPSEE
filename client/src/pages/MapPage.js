import React, { useState, useEffect, useRef } from "react";
import ReactDOM from "react-dom";
import mapboxgl from "mapbox-gl";
import DiveSiteModal from "../Components/DiveSiteModalComponent";

function Map() {
  const mapContainer = useRef(null);

  const [lng, setLng] = useState(119.5872);
  const [lat, setLat] = useState(-8.6057);
  const [zoom, setZoom] = useState(10.22);

  useEffect(() => {
    mapboxgl.accessToken = process.env.REACT_APP_MAP_ACCESS;
    const map = new mapboxgl.Map({
      container: mapContainer.current,
      style: process.env.REACT_APP_MAP_STYLE,
      center: [lng, lat],
      zoom: zoom,
    });

    map.on("move", () => {
      setLng(map.getCenter().lng.toFixed(4));
      setLat(map.getCenter().lat.toFixed(4));
      setZoom(map.getZoom().toFixed(4));
    });

    map.on("click", "komodo-dive-sites", (e) => {
      const modalRoot = document.getElementById("modal-root");

      const diveSite = {
        country: e.features[0].properties.country,
        region: e.features[0].properties.region,
        diveSite: e.features[0].properties.title,
      };

      ReactDOM.render(
        //might be better to use ReactDOM.createPortal
        <DiveSiteModal diveSite={diveSite} closeModal={() => closeModal()} />,
        modalRoot
      );
    });

    const popup = new mapboxgl.Popup({
      closeButton: false,
      closeOnClick: false,
    });

    map.on("mouseenter", "komodo-dive-sites", (e) => {
      // Change the cursor style as a UI indicator
      map.getCanvas().style.cursor = "pointer";

      const coordinates = e.features[0].geometry.coordinates.slice();
      const title = e.features[0].properties.title;

      //Ensure that if the map is zoomed out such that multiple
      //copies of the feature are visible this popup appears
      //over the copy being pointed to.
      while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
        coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
      }

      //Populate the popup and set its coordinates
      //based on the feature found.
      popup.setLngLat(coordinates).setHTML(title).addTo(map);
    });

    //popup de-renders when mouse leaves feature
    map.on("mouseleave", "komodo-dive-sites", () => {
      map.getCanvas().style.cursor = "";
      popup.remove();
    });
  }, []);

  function closeModal() {
    const modalRoot = document.getElementById("modal-root");
    ReactDOM.render(
      //might be better to use ReactDOM.createPortal
      null,
      modalRoot
    );
  }

  return (
    <div>
      <div ref={(el) => (mapContainer.current = el)} className="map-container">
        <div className="sidebar-style">
          <div>
            Longitude: {lng} | Latitude:
            {lat} | Zoom: {zoom}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Map;
