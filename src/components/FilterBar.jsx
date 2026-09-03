function FilterBar({ options, activeFilter, onSelect }) {
  return (
    <div className="flex flex-wrap gap-2 mb-6">
      {options.map((option) => (
        <button
          key={option.value}
          className={`px-4 py-2 rounded-full text-sm border transition-colors ${
            option.value === activeFilter
              ? "bg-indigo-500/15 border-indigo-400 text-indigo-300"
              : "bg-slate-900 border-slate-700 text-slate-400 hover:text-slate-200"
          }`}
          onClick={() => onSelect(option.value)}
        >
          {option.label}
        </button>
      ))}
    </div>
  )
}

export default FilterBar
