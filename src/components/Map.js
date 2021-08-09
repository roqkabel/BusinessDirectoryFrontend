import React from 'react'
import { GoogleMap, LoadScript } from '@react-google-maps/api';
import { GOOGLE_MAP_API_KEY } from '@/constants/global';

const containerStyle = {
  width: '100%',
  height: '100%'
};

const center = {
  lat: 5.55702,
  lng: -0.2064662
};

const defaultOptions = {
  scrollwheel: true,
  fullscreenControl: false,
  mapTypeControl: false,
  panControl: false,
  streetViewControl: false,
  zoomControl: "true",
  gestureHandling: "greedy",
};

const  MapComponent = ({children, ApiUrl, centerPin}) => {
  return (
    <LoadScript
    googleMapsApiKey={`${ApiUrl}`}
    >
      <GoogleMap
         mapContainerStyle={containerStyle}
         center={centerPin ?? center}
         zoom={14}
         options={defaultOptions}
      >
        { /* Child components, such as markers, info windows, etc. */ }
        <>
         {children}
        </>
      </GoogleMap>
    </LoadScript>
  )
}

export default MapComponent;