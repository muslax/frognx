export default function FrogMain({ children, title, ...props}) {
  return (
    <>
      <h1 className="text-4xl font-bold text-gray-700 leading-tight">{title}</h1>
      {children}
    </>
  )
}