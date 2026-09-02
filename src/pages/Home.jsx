import { useState, useMemo } from 'react'
import Header from '../components/Header'
import FilterBar from '../components/FilterBar'
import MovieList from '../components/MovieList'
import Footer from '../components/Footer'
import { initialMovies, FILTER_OPTIONS } from '../data/movies'

function Home() {
  const [movies, setMovies] = useState(initialMovies)
  const [activeFilter, setActiveFilter] = useState('all')

  const handleToggleFavorite = (id) => {
    setMovies((prev) =>
      prev.map((m) => (m.id === id ? { ...m, favorite: !m.favorite } : m))
    )
  }

  const visibleMovies = useMemo(() => {
    if (activeFilter === 'favorites') return movies.filter((m) => m.favorite)
    if (activeFilter === 'all') return movies
    return movies.filter((m) => m.status === activeFilter)
  }, [movies, activeFilter])

  const favoritesCount = movies.filter((m) => m.favorite).length

  return (
    <div className="max-w-3xl mx-auto">
      <Header title="MovieHub" subtitle="Your weekend watchlist, sorted." count={visibleMovies.length} />
      <FilterBar options={FILTER_OPTIONS} activeFilter={activeFilter} onSelect={setActiveFilter} />
      <MovieList movies={visibleMovies} onToggleFavorite={handleToggleFavorite} />
      <Footer year={2026} favoritesCount={favoritesCount} />
    </div>
  )
}

export default Home
