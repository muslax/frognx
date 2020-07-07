import Link from "next/link"

export default function NavItem({
  className = "",
  href,
  as = href,
  label,
  isActive,
  prepare = false
}) {
  return (
    <li className="text-pink-600 font-semibold hover:text-teal-400 my-1">
      <Link href={href} as={as}>
        <a>{label}</a>
      </Link>
    </li>
  )
}