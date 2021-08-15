import axios from 'axios'
import React, { useEffect, useState } from 'react'

export const useGetDirections = ({ originId, destinationId}) => {
    const [data, setData] = useState({})


   try {
       useEffect(() => {
           axios.get(`https://maps.googleapis.com/maps/api/directions/json?origin=place_id:${originId}&destination=place_id:${destinationId}&key=${process.env.googleApisKey}`)
                .then((res) => {
                    setData(res?.data?.routes[0]?.legs[0])
                })
       }, [originId, destinationId])
   } catch (error) {
       console.log(error)
   }
//    console.log(data)
   return data
}



// 