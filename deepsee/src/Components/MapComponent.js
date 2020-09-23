import React, { useState, useEffect, useRef } from 'react';
import mapboxgl from 'mapbox-gl';

function Map () {

  const mapContainer = useRef(null);

  const [lng, setLng] = useState(119.5872);
  const [lat, setLat] = useState(-8.6057);
  const [zoom, setZoom] = useState(10.22);

  useEffect( () => {

    mapboxgl.accessToken = 'pk.eyJ1Ijoic3RlaGVyYSIsImEiOiJja2ZmOTYxNTgwY2sxMnJvM3R3bGhwbW05In0.nzQVNouROweGSb7p6dw2cA';
      const map = new mapboxgl.Map({
        container: mapContainer.current,
        style: 'mapbox://styles/stehera/ckffagb3k12jh1api1n2lau45',
        center: [lng, lat],
        zoom: zoom
      });

    map.on('move', () => {
      setLng(map.getCenter().lng.toFixed(4))
      setLat(map.getCenter().lat.toFixed(4))
      setZoom(map.getZoom().toFixed(4))
    })

    map.on('click', function(e) {
      var features = map.queryRenderedFeatures(e.point, {
        layers: ['komodo-dive-sites'] // replace this with the name of the layer
    });

    if (!features.length) {
      return;
    }

    var feature = features[0];

    var popup = new mapboxgl.Popup({ offset: [0, -15] })
      .setLngLat(feature.geometry.coordinates)
      .setHTML('<h3>' + feature.properties.title + '</h3>')
      .addTo(map);
    });

  }, []);


    return (
      <div>
        <div className='sidebar-style'>
          <div>Longitude: {lng} | Latitude:
            {lat} | Zoom: {zoom}
          </div>
        </div>
        <div ref={el => mapContainer.current = el}
          className="map-container"/>
      </div>
    );
}

export default Map;