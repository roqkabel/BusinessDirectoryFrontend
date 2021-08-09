import React, { useState } from "react";

export default function useGetUserLocation() {
  const [currentLocation, setCurrentLocation] = useState({
    lat: 0,
    lng: 0,
  });

  try {
    if (typeof window != "undefined") {
      // Try HTML5 geolocation.
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const pos = {
              lat: position.coords.latitude,
              lng: position.coords.longitude,
            };
            setCurrentLocation(pos);
          },
          (err) => {
            setCurrentLocation({ lat: 0, lng: 0 });
          }
        );

        return currentLocation;
      } else {
        return currentLocation;
      }
    }
  } catch (error) {
    console.log(error);
  }
}
