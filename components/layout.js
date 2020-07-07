import clsx from 'clsx'

export default function Layout({ children, className, ...props}) {
  return (
    <section
    className={clsx("p-4 text-sm text-gray-700", className)}
    {...props}
    >
      {children}
      <style jsx>{`
        section {
            display: grid;
            grid-template-areas: "nav main";
            grid-template-columns: 112px 1fr;
            min-height: 100vh;
          }
      `}</style>
    </section>
  )
}

// export function Nav({ style={}, ...props}) {
//   return <nav style={{ ...style, gridArea: "nav" }} {...props} />
// }

export function Main({ style={}, ...props}) {
  return <main style={ {...style, gridArea: "main" }} {...props} />
}