import MovieCard from './MovieCard'
import EmptyState from './EmptyState'

function MovieList({ movies, onToggleFavorite }) {
  return (
    <section>
      {movies.length > 0 ? (
        <ul className="list-none p-0 m-0 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {movies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} onToggleFavorite={onToggleFavorite} />
          ))}
        </ul>
      ) : (
        <EmptyState message="No movies match this filter." />
      )}
    </section>
  )
}

export default MovieList
