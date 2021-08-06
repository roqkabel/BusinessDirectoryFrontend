import MapComponent from "@/components/Map"
import { useState } from "react";
import { DirectionsRenderer, DirectionsService } from '@react-google-maps/api';

const index = () => {
    const [directions, setDirections] = useState(null)
  

    const origin = { lat: 6.5244, lng:  3.3792 };
    const destination = { lat: 6.4667, lng:  3.4500};



    return (
        <div>
            <section style={{ height: '100vh'}}>
                <MapComponent ApiUrl={'AIzaSyBpGV3ijFW_A3ZG7tT9kF3ncrHZ9MhY8dE'}> 
                   {<DirectionsRenderer options={{ // eslint-disable-line react-perf/jsx-no-new-object-as-prop
                    destination: destination,
                    origin: origin,
                    travelMode: "DRIVING"
                  }}/>}
               
                    {<DirectionsService  options={{ directions: directions}}/>}
               
                  
                       
                  
                   
                </MapComponent>
            </section>
        </div>
    )
}

export default index
