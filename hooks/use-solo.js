import { movieFetcher, fetchAndCache } from '../lib/fetcher'
import useSWR from 'swr'

const key = "https://fastapi-hero.herokuapp.com/v1/movie/search/solo"

export default function useSolo() {
  return useSWR(key, movieFetcher)
}

export function getSolo() {
  return fetchAndCache(key)
}