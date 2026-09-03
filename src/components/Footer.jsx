function Footer({ year, favoritesCount }) {
  return (
    <footer className="mt-10 pt-5 border-t border-slate-800 text-slate-500 text-xs space-y-1">
      <p>© {year} MovieHub</p>
      {favoritesCount > 0 && (
        <p>You have {favoritesCount} {favoritesCount === 1 ? "favorite" : "favorites"} saved.</p>
      )}
    </footer>
  )
}

export default Footer
