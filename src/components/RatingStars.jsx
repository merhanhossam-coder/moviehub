function RatingStars({ rating }) {
  const stars = Array.from({ length: 5 }, (_, i) => i + 1)
  return (
    <div className="flex items-center gap-0.5 mt-2 text-amber-400 text-sm">
      {stars.map((n) => (
        <span key={n}>{n <= Math.round(rating) ? "★" : "☆"}</span>
      ))}
      <span className="ml-1.5 text-slate-400 text-xs">{rating.toFixed(1)}</span>
    </div>
  )
}

export default RatingStars
