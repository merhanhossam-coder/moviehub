import { NavLink } from 'react-router-dom'

function Navbar() {
  const linkClass = ({ isActive }) =>
    `px-3 py-1.5 rounded-full text-sm transition-colors ${
      isActive
        ? "bg-indigo-500/15 text-indigo-300"
        : "text-slate-400 hover:text-slate-200"
    }`

  return (
    <nav className="max-w-3xl mx-auto flex items-center justify-between px-6 sm:px-10 pt-6">
      <NavLink to="/" className="text-slate-50 font-bold text-lg no-underline">
        🎬 MovieHub
      </NavLink>
      <div className="flex items-center gap-2">
        <NavLink to="/" end className={linkClass}>
          Home
        </NavLink>
        <NavLink to="/about" className={linkClass}>
          About
        </NavLink>
        <NavLink to="/contact" className={linkClass}>
          Contact
        </NavLink>
      </div>
    </nav>
  )
}

export default Navbar
