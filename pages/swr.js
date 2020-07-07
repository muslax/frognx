import useSWR from 'swr'
import movieFetcher from '../lib/fetcher'
import FrogLayout from '../components/frog-layout'
import FrogMain from '../components/frog-main'
import CodeBlock from '../components/code-block'

export default function FrogSWR() {
  const title = 'SWR - Stale While Revalidate'
  // const url = "http://localhost:8000/v1/movie/search/bali"
  const url = process.env.NEXT_PUBLIC_MOVIE_API_PREFIX + "/movie/search/bali"
  const { data, error } = useSWR(url, movieFetcher)

  if (error) return (
    <FrogLayout>
      <FrogMain title="Error..." />
    </FrogLayout>
  )

  if (!data) return (
    <FrogLayout>
      <FrogMain title="Loading..." />
    </FrogLayout>
  )

  return (
    <FrogLayout>
      <FrogMain title={title}>
        {/* <p className="text-bold text-orange-500 mb-6">{process.env.NEXT_PUBLIC_TOKYO}</p> */}
        <div className="infobox">
          Search term: <span className="font-bold">bali</span>.
        </div>
        <h2 className="text-xl font-bold">Data</h2>
        <CodeBlock code={JSON.stringify(data, null, 2)} />
        <h2 className="text-xl font-bold mb-4">Presentation</h2>
        {data.map((m) => (
          <div key={m._id} className="">
            <div className="flex mb-6">
              <div className="flex-initial">
                <div className="w-48">
                  <img src={m.poster} className="w-full" />
                </div>
              </div>
              <div className="flex-auto ml-3">
                <p className="text-lg font-bold">{m.title}</p>
                <p className="text-pink-600 mb-3">Released: {m.released}</p>
                <p className="mb-3">
                  Cast:<br/> {m.cast.join(", ")}
                  <span className="font-semibold"></span>
                </p>
                <p>{m.plot}</p>
              </div>
            </div>
          </div>
        ))}
      </FrogMain>
    </FrogLayout>
  )
}