import React, { useState } from "react";
import Loading from "./Loading";
import MovieList from "./MovieList";

const SearchBar = () => {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchMovies = async () => {
    if (!query) return;
    if (
      movies.length > 0 &&
      movies[0]?.Title.toLowerCase() === query.toLowerCase()
    )
      return;
    setLoading(true);
    setError(null);
    try {
      const res = await fetch(
        `https://www.omdbapi.com/?apikey=f2f56598&s=${query}`
      );
      const data = await res.json();
      if (data.Response === "True") {
        setMovies(data.Search);
      } else {
        setMovies([]);
        setError(data.Error);
      }
    } catch (error) {
      setError("Failed to fetch movies.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-300 to-gray-500 flex items-start justify-center p-6">
      <main className="w-full max-w-5xl">
        <h1 className="text-3xl font-semibold text-blue-800 mb-6 text-center">
          Search Movies
        </h1>

        <div className="bg-gray-100 shadow-lg rounded-2xl p-6">
          <div className="flex items-center gap-3">
            <div className="relative flex-1">
              <input
                type="text"
                placeholder="Type a movie name..."
                value={query}
                onKeyDown={(e) => e.key === "Enter" && fetchMovies()}
                onChange={(e) => setQuery(e.target.value)}
                className="font-bold text-2xl text-black w-full pl-4 pr-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-300 focus:border-indigo-500 transition shadow-sm"
                autoComplete="off"
              />
            </div>

            <button
              onClick={fetchMovies}
              className="hover:scale-110 transition transition-150 inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-xl shadow-md focus:ring-2 focus:ring-indigo-300 cursor-pointer"
            >
              Search
            </button>
          </div>

          <div className="mt-6">
            {loading && <Loading height="200px" />}
            {error && <p className="text-sm text-red-500">{error}</p>}
            {!loading && !error && movies.length > 0 && (
              <MovieList movies={movies} />
            )}
          </div>
        </div>

        <footer className="text-center text-sm text-slate-500 mt-4">
          Powered by Marwan F.
        </footer>
      </main>
    </div>
  );
};

export default SearchBar;
