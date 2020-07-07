import clsx from 'clsx'
import FrogNavigation from './frog-navigation'

export default function FrogLayout({ children, className, ...props}) {
  return (
    <section className="wrap">
      <div className="frog-nav flex-initial p-4 bg-teal-200">
        <FrogNavigation />
      </div>
      <div className="frog-main overflow-scroll flex-auto px-6 py-10 text-sm text-gray-700">
        <main className="max-w-screen-md">
          {children}
        </main>
      </div>
      <style jsx>{`
        section.wrap {
          display: flex;
          min-height: 100vh;
        }
      `}
      </style>
    </section>
  )
}