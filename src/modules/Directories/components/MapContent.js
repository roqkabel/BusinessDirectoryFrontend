import React, { useState } from 'react'
import { GoogleMap, InfoWindow, LoadScript, Marker } from '@react-google-maps/api';
import { GOOGLE_MAP_API_KEY } from '@/constants/global';
import Link from 'next/link';
import { DIRECTORIES_PAGE } from '@/constants/routes';
import MapStyle from './mapStyle';

const containerStyle = {
  width: '100%',
  height: '95%'
};

const center = {
  lat: 5.55702,
  lng: -0.2064662
};

const defaultOptions = {
  scrollwheel: false,
  fullscreenControl: false,
  mapTypeControl: false,
  panControl: false,
  streetViewControl: true,
  zoomControl: "true",
  gestureHandling: "greedy",
};




const MapComponent = (props) => {
  const [selectedCompany, setSelectedCompany] = useState(null);
  const checkIsIndex = (index) => {
    return props.currentIndex == index;
  };

  


  const getSize = (index) => (checkIsIndex(index) == true ? 70 : 40);

  return (
    <LoadScript
      googleMapsApiKey={`${process.env.googleApisKey}`}
    >
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={14}
        options={defaultOptions}
      >
        { /* Child components, such as markers, info windows, etc. */ }
        <>
        {props?.businessList &&
        props?.businessList.length > 0 &&
        props?.businessList.map((data, index) => {
          // console.log(checkIsIndex(index))
          // console.log(getSize(index))
          return (
            <Marker
              key={index}
              position={{
                lat: data.geometry.location.lat,
                lng: data.geometry.location.lng,
              }}
              onClick={(event) => {
                setSelectedCompany(data);
              }}
              animation={2}
              // icon={{
              //   url: "https://img.icons8.com/glyph-neue/64/000000/marker.png",
              //   scaledSize: new window.google.maps.Size(
              //     getSize(index),
              //     getSize(index)
              //   ),
              // }}
            />
          );
        })}
         {selectedCompany && (
        <InfoWindow
          position={{
            lat: selectedCompany.geometry.location.lat,
            lng: selectedCompany.geometry.location.lng,
          }}
          onCloseClick={() => setSelectedCompany(null)}
        >
          <div>
            <img src={selectedCompany.image} width="100%" height="100" />
            <Link href={DIRECTORIES_PAGE + "/" + selectedCompany.place_id}>
              <h5 className="mt-3">{selectedCompany.name}</h5>
            </Link>
            <p>{selectedCompany.formatted_address}</p>
            <p>{selectedCompany.category}</p>
          </div>
        </InfoWindow>
      )}
        </>
      </GoogleMap>
    </LoadScript>
  )
}

export default MapComponent;





