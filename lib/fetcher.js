import useSWR, { mutate } from 'swr'

const prefix = process.env.NEXT_PUBLIC_MOVIE_API_PREFIX

export default async function movieFetcher(...args) {
  console.log('movieFetcher()')
  const response = await fetch(...args)
  return response.json()
}

export function fetchAndCache(key) {
  console.log("fetchAndCache", key)
  const response = movieFetcher(key)
  mutate(key, response, shouldRevalidate=false)
  return response
}