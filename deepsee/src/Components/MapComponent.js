import React, { useState, useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import mapboxgl from 'mapbox-gl';
import DiveSiteModal from './DiveSiteModalComponent';


function Map () {

  const mapContainer = useRef(null);

  const [lng, setLng] = useState(119.5872);
  const [lat, setLat] = useState(-8.6057);
  const [zoom, setZoom] = useState(10.22);

  // function handleShow() {
  //   console.log('show');
  //   return ReactDOM.render(
  //     <Modal />,
  //     modalRoot
  //     )
  //   };

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


    map.on('click', 'komodo-dive-sites', (err) => {
      const modalRoot = document.getElementById('modal-root');
      const modalDiv = document.createElement('div');
      modalRoot.appendChild(modalDiv);
    //   var features = map.queryRenderedFeatures(e.point, {
    //     layers: ['komodo-dive-sites'] // replace this with the name of the layer
    // });

    // if (!features.length) {
    //   return;
    // }

    // var feature = features[0];


    // //ALLOWS RENDERING REACT COMPONENT INSIDE OF POPUP
    // // const popup = document.createElement('div');
    // // ReactDOM.render(<Popup/>, popup);

    // new mapboxgl.Popup({})
    //   .setLngLat(feature.geometry.coordinates)
    //   .setHTML('<p>'+ feature.properties.title +'</p>')
    //   .addTo(map);
    return ReactDOM.render( //might be better to use ReactDOM.createPortal
      <DiveSiteModal closeModal={() => closeModal()}/>,
      modalRoot
      )
    });

    const popup = new mapboxgl.Popup({
      closeButton: false,
      closeOnClick: false
    })

    map.on('mouseenter', 'komodo-dive-sites', (e) => {
      // Change the cursor style as a UI indicator
      map.getCanvas().style.cursor = 'pointer';

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
    map.on('mouseleave', 'komodo-dive-sites', () => {
      map.getCanvas().style.cursor = '';
      popup.remove();
    })

  }, []);

  function closeModal () {
    const modalRoot = document.getElementById('modal-root');
    return ReactDOM.render( //might be better to use ReactDOM.createPortal
      null,
      modalRoot
      )
  }


    return (
      <div>
        <div ref={el => mapContainer.current = el}
          className="map-container">
            <div className='sidebar-style'>
          <div>Longitude: {lng} | Latitude:
            {lat} | Zoom: {zoom}
          </div>
        </div>
            <div id="modal-root"></div>
          </div>
      </div>
    );
}

export default Map;