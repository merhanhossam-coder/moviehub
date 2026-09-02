function Header({ title, subtitle, count }) {
  return (
    <header className="flex items-end justify-between gap-4 mb-7">
      <div>
        <h1 className="m-0 text-2xl font-bold tracking-tight text-slate-50">{title}</h1>
        <p className="text-slate-400 text-sm mt-1">{subtitle}</p>
      </div>
      {count > 0 && (
        <span className="bg-slate-800 border border-slate-700 text-slate-400 text-xs px-3 py-1.5 rounded-full whitespace-nowrap">
          {count} titles
        </span>
      )}
    </header>
  )
}

export default Header
