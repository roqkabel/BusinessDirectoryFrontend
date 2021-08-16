import useSWR from 'swr'
import axios from 'axios'

const fetcher = url => axios.get(url).then(res => res.data)

export function useGetDirections ({ originId, destinationId }) {
    const { data, error } = useSWR(`https://maps.googleapis.com/maps/api/directions/json?origin=${originId}&destination=${destinationId}&key=${process.env.googleApisKey}`, fetcher)
  
    return {
      data: data?.routes[0]?.legs[0],
      isLoading: !error && !data,
      isError: error
    }
  }
