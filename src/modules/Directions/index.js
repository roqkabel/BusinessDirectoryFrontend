import MapComponent from "@/components/Map";
import { useState } from "react";
import { DirectionsRenderer, DirectionsService } from "@react-google-maps/api";
import useGetUserLocation from "src/hooks/useGetUserLocation";
import { useRouter } from "next/router";
import useGetPlaceDetails from "src/hooks/useGetPlaceDetails";
import { useEffect } from "react";

const index = () => {
  const [directions, setDirections] = useState(null);
  const [travelMode, setTravelMode] = useState("DRIVING");
  const [origin, setOrigin] = useState({ lat: 6.5244, lng: 3.3792 });
  const [destination, setDestination] = useState({ lat: 6.4667, lng: 3.45 });
  const [directionResponse, setDirectionResponse] = useState(null);

  const router = useRouter();

  const useLocation = useGetUserLocation();
  const placeDetails = useGetPlaceDetails({
    place_id: router.query.placeId,
    apiKey: "AIzaSyBpGV3ijFW_A3ZG7tT9kF3ncrHZ9MhY8dE",
  });

  useEffect(() => {
    setDestination(placeDetails?.geometry?.location);
  }, [placeDetails?.geometry?.location]);

  useEffect(() => {
    setOrigin(useLocation);
  }, [useLocation]);

  const directionsCallback = (value) => {
    setDirectionResponse(value);
  };

  return (
    <div>
      <section style={{ height: "100vh" }}>
        <MapComponent
          centerPin={origin}
          ApiUrl={"AIzaSyBpGV3ijFW_A3ZG7tT9kF3ncrHZ9MhY8dE"}
        >
          <>
            <DirectionsRenderer
              options={{
                directions: directionResponse,
              }}
            />

            <DirectionsService
              // required
              options={{
                destination: destination,
                origin: origin,
                travelMode: travelMode,
              }}
              // required
              callback={directionsCallback}
            />
          </>
        </MapComponent>
      </section>
    </div>
  );
};

export default index;
