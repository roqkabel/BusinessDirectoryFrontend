import useSWR from 'swr'
import axios from 'axios'

const fetcher = url => axios.get(url).then(res => res.data)

export function useData (place_id) {
    const { data, error } = useSWR(`https://maps.googleapis.com/maps/api/place/details/json?place_id=${place_id}&key=${process.env.googleApisKey}`, fetcher)
  
    return {
      details: data,
      isLoading: !error && !data,
      isError: error
    }
  }