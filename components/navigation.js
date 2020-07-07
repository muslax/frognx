// import { Nav } from './layout'

export default function Navigation({ children }) {
  return (
    <nav className="bg-gray-100">
      <div className="fixed w-24">
        <ul className="pt-2">{children}</ul>
      </div>
    </nav>
  )
}