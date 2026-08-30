# MovieHub

A small React project — a movie watchlist app — built to demonstrate core
React concepts with a clean, simple UI.

## Getting started

```bash
npm install
npm run dev      # start the dev server
npm run build    # production build
```

## Project structure

```
src/
  data/
    movies.js          sample movie data
  components/
    Badge.jsx           reusable pill/label
    RatingStars.jsx      reusable star rating
    MovieCard.jsx         single movie card
    MovieList.jsx          grid of MovieCards (+ empty state)
    FilterBar.jsx           filter buttons
    Header.jsx               page header
    Footer.jsx                page footer
    EmptyState.jsx             "no results" message
  App.jsx               top-level component, owns state
  main.jsx              React entry point
  App.css / index.css   styling
```

## Where each required concept is used

- **Reusable Components** — `Badge`, `RatingStars`, `EmptyState`, `Header`,
  and `Footer` are all generic and reused across the app (e.g. `Badge` is
  used twice inside `MovieCard` with different props).
- **Props** — data flows one-way from `App` -> `MovieList` -> `MovieCard` ->
  `Badge` / `RatingStars`. `App` owns all state; every other component
  receives what it needs as props.
- **Ternary Operator** — e.g. in `MovieList.jsx` (grid vs. empty state),
  `MovieCard.jsx` (filled vs. outline heart, badge text/tone), and
  `FilterBar.jsx` (active vs. inactive button style).
- **`&&` Operator** — e.g. the "New" badge and rating in `MovieCard.jsx`,
  the titles count in `Header.jsx`, and the favorites summary in
  `Footer.jsx` are all only rendered when their condition is true.
- **`.map()`** — `MovieList.jsx` maps movies to `MovieCard`s,
  `FilterBar.jsx` maps filter options to buttons, and
  `RatingStars.jsx` maps an array to star icons.

## Features

- Filter movies by "All", "Now Showing", "Available", or "Favorites"
- Tap the heart on a card to favorite/unfavorite a movie
- Movies without a rating show a "Not yet rated" note instead of stars
- An empty state appears if a filter has no matching movies
