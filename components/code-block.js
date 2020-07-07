export default function CodeBlock({ code }) {
  return (
    <div className="codeblock">
      <pre className="w-fulls text-red-700">{code}</pre>
    </div>
  )
}