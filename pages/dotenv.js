import FrogLayout from '../components/frog-layout'
import FrogMain from '../components/frog-main'

export default function Dotenv() {
  const title = 'Dotenv Variables'
  const vars = [
    {name: "NEXT_PUBLIC_JAKARTA", value: process.env.NEXT_PUBLIC_JAKARTA},
    {name: "NEXT_PUBLIC_TOKYO",value: process.env.NEXT_PUBLIC_TOKYO},
    {name: "NEXT_PUBLIC_NAIROBI",value: process.env.NEXT_PUBLIC_NAIROBI},
    {name: "NEXT_PUBLIC_SOLO",value: process.env.NEXT_PUBLIC_SOLO},
  ]
  return (
    <FrogLayout>
      <FrogMain title={title}>
        {/* <p className="text-bold text-orange-500 mb-6">{process.env.NEXT_PUBLIC_TOKYO}</p> */}
        <div className="infobox">
          Retrieve values from <code className="text-red-700">.env</code> file.
        </div>
        {vars.map((e) => (
          <p key={e.name} className="mb-1">
            <span className="text-red-500 text-xs font-mono">{e.name}</span>:{` `}
            {e.value}
          </p>
        ))}
      </FrogMain>
    </FrogLayout>
  )
}

export function Dotenvs() {
  const vars = [
    {name: "NEXT_PUBLIC_JAKARTA", value: process.env.NEXT_PUBLIC_JAKARTA},
    {name: "NEXT_PUBLIC_TOKYO",value: process.env.NEXT_PUBLIC_TOKYO},
    {name: "NEXT_PUBLIC_NAIROBI",value: process.env.NEXT_PUBLIC_NAIROBI},
    {name: "NEXT_PUBLIC_SOLO",value: process.env.NEXT_PUBLIC_SOLO},
  ]
  return (
    <>
      <h1 className="text-3xl text-gray-900 mt-2 mb-4">
        Dotenv
      </h1>
      {vars.map((e) => (
        <p key={e.name} className="mb-1">
          <span className="text-red-500 text-xs font-mono">{e.name}</span>:{` `}
          {e.value}
        </p>
      ))}
    </>
  )
}