function EmptyState({ message = "Nothing here yet." }) {
  return (
    <div className="text-center py-16 text-slate-400">
      <span className="text-3xl block mb-2">🎬</span>
      <p>{message}</p>
    </div>
  )
}

export default EmptyState
