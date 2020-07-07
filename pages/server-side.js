import FrogLayout from '../components/frog-layout'
import FrogMain from '../components/frog-main'
import CodeBlock from '../components/code-block'

export default function SSR({ movies }) {
  const title = 'Server Side Rendering'
  return (
    <FrogLayout>
      <FrogMain title={title}>
      <div className="infobox">
      Search term: <span className="font-bold">jakarta</span>.
        </div>
        <h2 className="text-xl font-bold">Data</h2>
        {movies && <CodeBlock code={JSON.stringify(movies, null, 2)} />}
        <h2 className="text-xl font-bold mb-4">Presentation</h2>
        {movies.map((m) => (
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

export async function getServerSideProps(context) {
  console.log('getServerSideProps()')
  const url = process.env.NEXT_PUBLIC_MOVIE_API_PREFIX + "/movie/search/jakarta"
  const res = await fetch(url)
  const movies = await res.json()

  return { props: { movies }}
}