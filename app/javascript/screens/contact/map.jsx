import React, { useRef, useEffect, useState } from 'react';
import mapboxgl from '!mapbox-gl';
import coordinates from './coordinates.json'

mapboxgl.accessToken =
  'pk.eyJ1IjoibWN3YWxpbmEiLCJhIjoiY2xmODFxNmFwMGE1OTN0bzI2cXh1NDhhcCJ9.MftWHNVfXFoGjQj3bW9VPA';


export default function Map() {
  const mapContainerRef = useRef(null);


  useEffect(() => {
    const map = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: "mapbox://styles/mapbox/streets-v12",
      center: [-87.65, 41.84],
      zoom: 5,
    });

    coordinates.features.map((feature) =>
      new mapboxgl.Marker().setLngLat(feature.geometry.coordinates).addTo(map)
    );

    return () => map.remove();
  }, []);

  return (
    <div>
      <div ref={mapContainerRef} className="map-container" />
    </div>
  );
}
