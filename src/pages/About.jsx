function About() {
  return (
    <div className="max-w-3xl mx-auto text-slate-300">
      <h1 className="text-2xl font-bold text-slate-50 mb-4">About MovieHub</h1>
      <p className="mb-4">
        MovieHub is a movie watchlist app where you can browse titles, filter
        them by availability, and keep track of your favorites.
      </p>
      <p className="mb-4">
        This page was added as part of a React Router, Forms, Axios and
        Custom Hooks assignment, alongside a Contact page, navigation bar
        and a Not Found page.
      </p>
      <ul className="list-disc pl-5 space-y-1">
        <li>Built with React 19 and Vite</li>
        <li>Routing handled with React Router DOM</li>
        <li>Form state and submission handled with a custom hook</li>
        <li>HTTP requests handled with Axios</li>
      </ul>
    </div>
  )
}

export default About
