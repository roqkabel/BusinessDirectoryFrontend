import useSWR from 'swr'
import axios from 'axios'

const fetcher = url => axios.get(url).then(res => res.data)

export function useGetPlaceDetails ({ place_id, apiKey }) {
    const { data, error } = useSWR(`https://maps.googleapis.com/maps/api/place/details/json?place_id=${place_id}&key=${apiKey}`, fetcher)
  
    return {
      data: data?.result,
      isLoading: !error && !data,
      isError: error
    }
  }

