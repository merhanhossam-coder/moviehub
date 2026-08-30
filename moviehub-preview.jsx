import { useState, useMemo } from "react";

const initialMovies = [
  { id: 1, title: "Nebula Drift", genre: "Sci-Fi", year: 2026, poster: "🚀", rating: 4.5, status: "now-showing", isNew: true, favorite: false },
  { id: 2, title: "The Quiet Orchard", genre: "Drama", year: 2024, poster: "🍂", rating: 4.1, status: "available", isNew: false, favorite: true },
  { id: 3, title: "Paper Lanterns", genre: "Romance", year: 2025, poster: "🏮", rating: null, status: "available", isNew: false, favorite: false },
  { id: 4, title: "Iron Tide", genre: "Action", year: 2026, poster: "⚓", rating: 3.8, status: "now-showing", isNew: true, favorite: false },
  { id: 5, title: "Glass Ceiling", genre: "Documentary", year: 2023, poster: "🏙️", rating: 4.9, status: "available", isNew: false, favorite: true },
  { id: 6, title: "Static & Sirens", genre: "Thriller", year: 2026, poster: "📻", rating: null, status: "now-showing", isNew: false, favorite: false },
];

const FILTER_OPTIONS = [
  { label: "All", value: "all" },
  { label: "Now Showing", value: "now-showing" },
  { label: "Available", value: "available" },
  { label: "Favorites", value: "favorites" },
];

function Badge({ text, tone = "default" }) {
  const tones = {
    default: "bg-slate-700 text-slate-300",
    neutral: "bg-slate-700 text-slate-300",
    live: "bg-red-500/15 text-red-400",
    new: "bg-emerald-500/15 text-emerald-400",
  };
  return (
    <span className={`inline-block text-[10px] font-semibold uppercase tracking-wide px-2.5 py-1 rounded-full ${tones[tone]}`}>
      {text}
    </span>
  );
}

function RatingStars({ rating }) {
  const stars = Array.from({ length: 5 }, (_, i) => i + 1);
  return (
    <div className="flex items-center gap-0.5 mt-2 text-amber-400 text-sm">
      {stars.map((n) => (
        <span key={n}>{n <= Math.round(rating) ? "★" : "☆"}</span>
      ))}
      <span className="ml-1.5 text-slate-400 text-xs">{rating.toFixed(1)}</span>
    </div>
  );
}

function EmptyState({ message = "Nothing here yet." }) {
  return (
    <div className="text-center py-16 text-slate-400">
      <span className="text-3xl block mb-2">🎬</span>
      <p>{message}</p>
    </div>
  );
}

function MovieCard({ movie, onToggleFavorite }) {
  const { id, title, genre, year, poster, rating, status, isNew, favorite } = movie;
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
  );
}

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
  );
}

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
  );
}

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
  );
}

function Footer({ year, favoritesCount }) {
  return (
    <footer className="mt-10 pt-5 border-t border-slate-800 text-slate-500 text-xs space-y-1">
      <p>© {year} MovieHub</p>
      {favoritesCount > 0 && (
        <p>You have {favoritesCount} {favoritesCount === 1 ? "favorite" : "favorites"} saved.</p>
      )}
    </footer>
  );
}

export default function App() {
  const [movies, setMovies] = useState(initialMovies);
  const [activeFilter, setActiveFilter] = useState("all");

  const handleToggleFavorite = (id) => {
    setMovies((prev) =>
      prev.map((m) => (m.id === id ? { ...m, favorite: !m.favorite } : m))
    );
  };

  const visibleMovies = useMemo(() => {
    if (activeFilter === "favorites") return movies.filter((m) => m.favorite);
    if (activeFilter === "all") return movies;
    return movies.filter((m) => m.status === activeFilter);
  }, [movies, activeFilter]);

  const favoritesCount = movies.filter((m) => m.favorite).length;

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 p-6 sm:p-10">
      <div className="max-w-3xl mx-auto">
        <Header title="MovieHub" subtitle="Your weekend watchlist, sorted." count={visibleMovies.length} />
        <FilterBar options={FILTER_OPTIONS} activeFilter={activeFilter} onSelect={setActiveFilter} />
        <MovieList movies={visibleMovies} onToggleFavorite={handleToggleFavorite} />
        <Footer year={2026} favoritesCount={favoritesCount} />
      </div>
    </div>
  );
}
