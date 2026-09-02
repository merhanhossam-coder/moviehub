import Badge from './Badge'
import RatingStars from './RatingStars'

function MovieCard({ movie, onToggleFavorite }) {
  const { id, title, genre, year, poster, rating, status, isNew, favorite } = movie
  return (
    <li className={`flex gap-3.5 bg-slate-900 border rounded-2xl p-4 transition-colors ${favorite ? "border-indigo-400" : "border-slate-700"}`}>
      <div className="text-3xl w-14 h-14 flex items-center justify-center bg-slate-800 rounded-xl shrink-0">
        {poster}
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2">
          <h3 className="m-0 text-base font-semibold text-slate-100">{title}</h3>
          {isNew && <Badge text="New" tone="new" />}
        </div>
        <p className="text-slate-400 text-xs mt-0.5 mb-2">{genre} · {year}</p>
        <Badge
          text={status === "now-showing" ? "Now Showing" : "Available"}
          tone={status === "now-showing" ? "live" : "neutral"}
        />
        {rating && <RatingStars rating={rating} />}
        {!rating && <p className="text-xs italic text-slate-500 mt-2">Not yet rated</p>}
      </div>
      <button
        className="self-start text-lg p-1"
        onClick={() => onToggleFavorite(id)}
        aria-label={favorite ? "Remove from favorites" : "Add to favorites"}
      >
        {favorite ? "❤️" : "🤍"}
      </button>
    </li>
  )
}

export default MovieCard
