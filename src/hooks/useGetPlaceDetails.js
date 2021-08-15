import axios from "axios";
import React, { useEffect, useState } from "react";

export default function useGetPlaceDirection({ place_id, apiKey }) {
  const [data, setData] = useState({});

  try {
    useEffect(() => {
      axios
        .get(
          `https://maps.googleapis.com/maps/api/place/details/json?place_id=${place_id}&key=${apiKey}`
        )
        .then((res) => {
          setData(res.data.result);
        });
    }, [place_id]);
  } catch (error) {
    console.log(error);
  }

  return data;
}
