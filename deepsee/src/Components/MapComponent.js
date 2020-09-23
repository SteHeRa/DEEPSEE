import React, { useState, useEffect, useRef } from 'react';
import mapboxgl from 'mapbox-gl';

function Map () {

  const [map, setMap] = useState(null);
  const mapContainer = useRef(null);

  // const [lng, setLng] = useState(119.654983);
  // const [lat, setLat] = useState(-8.61207);
  // const [zoom, setZoom] = useState(10.22);

  useEffect( () => {
    mapboxgl.accessToken = 'pk.eyJ1Ijoic3RlaGVyYSIsImEiOiJja2ZmOTYxNTgwY2sxMnJvM3R3bGhwbW05In0.nzQVNouROweGSb7p6dw2cA';
    const initializeMap = ({ setMap, mapContainer }) => {
      const map = new mapboxgl.Map({
        container: mapContainer.current,
        style: 'mapbox://styles/stehera/ckffagb3k12jh1api1n2lau45',
        center: [119.654983, -8.61207],
        zoom: 10.22
      });

      map.on('load', () => {
        setMap(map);
        map.resize();
      });
    };

    if (!map) initializeMap({ setMap, mapContainer });

    // map.on('move', () => {
    //   setLng(map.getCenter().lng.toFixed(4))
    //   setLat(map.getCenter().lat.toFixed(4))
    //   setZoom(map.getZoom().toFixed(4))
    // })

  }, [map]);

    return (
      <div>
        {/* <div className='sidebarStyle'>
          <div>Longitude: {lng} | Latitude:
            {lat} | Zoom: {zoom}
          </div>
        </div> */}
        <div ref={el => mapContainer.current = el}
          className="map-container"/>
      </div>
    );
}

export default Map;