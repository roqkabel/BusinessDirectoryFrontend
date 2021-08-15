import MapComponent from "@/components/Map";
import { useState } from "react";
import { DirectionsRenderer, DirectionsService } from "@react-google-maps/api";
import useGetUserLocation from "src/hooks/useGetUserLocation";
import { useRouter } from "next/router";
import useGetPlaceDetails from "src/hooks/useGetPlaceDetails";
import { useEffect } from "react";
import NavigationMenu from "@/components/NavigationMenu";
import { GetDirectionCard } from "./Components/GetDirectionCard";

const index = () => {
  const [directions, setDirections] = useState({});
  const [travelMode, setTravelMode] = useState("DRIVING");
  const [origin, setOrigin] = useState({});
  const [destination, setDestination] = useState({});
  const [directionResponse, setDirectionResponse] = useState(null);

  const router = useRouter();

  const useLocation = useGetUserLocation();
  const placeDetails = useGetPlaceDetails({
    place_id: router.query.id,
    apiKey: `${process.env.googleApisKey}`
  });

  useEffect(() => {
    setDestination({...placeDetails?.geometry?.location});
  }, [placeDetails?.geometry?.location]);

  useEffect(() => {
    setDirections({...placeDetails})
  }, [placeDetails])

  useEffect(() => {
    setOrigin({...useLocation});
  }, [useLocation]);

  const directionsCallback = (value) => {
    setDirectionResponse(value);
  };



  return (
    <div>
      <NavigationMenu directory />
      <section style={{ height: "100vh", marginTop: 70 }}>
        <div className="">
          <GetDirectionCard directions={directions} origin={origin}/>
        </div>
        <MapComponent
          centerPin={origin}
          ApiUrl={`${process.env.googleApisKey}`}
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
