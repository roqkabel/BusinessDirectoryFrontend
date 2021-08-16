import MapComponent from "@/components/Map";
import { useState } from "react";
import { DirectionsRenderer, DirectionsService } from "@react-google-maps/api";
import useGetUserLocation from "src/hooks/useGetUserLocation";
import { useRouter } from "next/router";
import { useGetPlaceDetails } from "src/hooks/useGetPlaceDetails";
import { useEffect } from "react";
import NavigationMenu from "@/components/NavigationMenu";
import { GetDirectionCard } from "./Components/GetDirectionCard";
import { Spin } from 'antd';

const index = () => {
  const [directions, setDirections] = useState({});
  const [travelMode, setTravelMode] = useState("DRIVING");
  const [origin, setOrigin] = useState({});
  const [destination, setDestination] = useState({});
  const [directionResponse, setDirectionResponse] = useState(null);

  const router = useRouter();

  const useLocation = useGetUserLocation();

  const { data, isLoading, isError } = useGetPlaceDetails({
    place_id: router.query.id,
    apiKey: `${process.env.googleApisKey}`,
  });

  useEffect(() => {
    setDestination({ ...data?.geometry?.location });
  }, [data?.geometry?.location]);

  useEffect(() => {
    setDirections({ ...data });
  }, [data]);

  useEffect(() => {
    setOrigin({ ...useLocation });
  }, [useLocation]);

  const directionsCallback = (value) => {
    setDirectionResponse(value);
  };

  if (isLoading) return <Spin size="large" />;
  if (isError) return <div>Error</div>;
  return (
    <div>
      <NavigationMenu directory />
      <section style={{ height: "100vh", marginTop: 70 }}>
        <div className="">
          <GetDirectionCard directions={directions} origin={origin} />
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
