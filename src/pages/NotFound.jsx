import { Link } from 'react-router-dom'

function NotFound() {
  return (
    <div className="max-w-3xl mx-auto text-center py-20">
      <h1 className="text-5xl font-bold text-slate-50 mb-3">404</h1>
      <p className="text-slate-400 mb-6">The page you are looking for does not exist.</p>
      <Link
        to="/"
        className="inline-block px-4 py-2 rounded-full text-sm bg-indigo-500/15 border border-indigo-400 text-indigo-300 hover:text-indigo-200"
      >
        Back to Home
      </Link>
    </div>
  )
}

export default NotFound
