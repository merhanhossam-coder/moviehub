# 🎬 MovieHub

A clean and responsive movie watchlist application built with **React** and **Vite**.

MovieHub allows users to browse a collection of movies, filter them by availability, and manage their favorite movies through a simple and intuitive interface.

---

## ✨ Features

- 🎥 Browse a curated list of movies
- 🔎 Filter movies by:
  - All
  - Now Showing
  - Available
  - Favorites
- ❤️ Add and remove movies from favorites
- ⭐ Display movie ratings using reusable star-rating components
- 🆕 Highlight newly released movies
- 📭 Display an empty state when no movies match the selected filter
- 📱 Responsive and clean user interface
- ♻️ Reusable React components
- ⚡ Fast development and production builds with Vite

---

## 🛠️ Technologies Used

- **React 19**
- **Vite**
- **JavaScript (ES6+)**
- **CSS3**
- **Oxlint**

---

## 📂 Project Structure

```text
moviehub/
├── public/
│   ├── favicon.svg
│   └── icons.svg
│
├── src/
│   ├── components/
│   │   ├── Badge.jsx
│   │   ├── EmptyState.jsx
│   │   ├── FilterBar.jsx
│   │   ├── Footer.jsx
│   │   ├── Header.jsx
│   │   ├── MovieCard.jsx
│   │   ├── MovieList.jsx
│   │   └── RatingStars.jsx
│   │
│   ├── data/
│   │   └── movies.js
│   │
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
│
├── index.html
├── package.json
├── package-lock.json
├── vite.config.js
└── .oxlintrc.json
