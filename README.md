# https://movie-jszjkzx52-maro7772s-projects.vercel.app/
<<<<<<< HEAD
# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
=======
# Movie App

A React-based movie search application that lets users search movies, view details, and optionally save favorites.

---

## Project Setup

This project was bootstrapped using **Create React App** (or **Vite**, specify which you used).

### Folder Structure
- `components/` — Reusable UI components like SearchBar, MovieCard, MovieList
- `pages/` — Application pages like Home and Movie Details
- `styles/` — CSS or styling files

---

## Features

### Home Page
- Search bar to type a movie name.
- On search, fetch movie data from a public API [OMDb API](http://www.omdbapi.com/).
- Display search results as a list of movie cards with poster, title, and year.

### Movie Details Page
- Clicking on a movie card navigates to a detailed page via React Router.
- Detailed info displayed: poster, title, year, description, rating, and more.

### Reusable Components
- `SearchBar` — for inputting search queries.
- `MovieCard` — displays individual movie info.
- `MovieList` — displays a list of movies.

---

## State Management

- Used React’s `useState` for local state.
- Used `useEffect` to fetch data from APIs.
- Passed data between components using props.

---

## Styling

- Basic styling applied using TailwindCSS 

---

## Bonus Features
- Favorites feature implemented using `useContext` or localStorage.
- Loading spinner displayed during API calls.
- Basic error handling for failed API requests.
