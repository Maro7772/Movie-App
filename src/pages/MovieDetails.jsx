import React, { useEffect, useState, useContext } from "react";
import { useParams, Link } from "react-router-dom";
import Loading from "../components/Loading";
import { FavoritesContext } from "../context/FavoritesContext";

const MovieDetails = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);

  const { favorites, addToFavorites, removeFromFavorites } =
    useContext(FavoritesContext);

  const isFavorite = favorites.some((fav) => fav.imdbID === id);

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const res = await fetch(
          `https://www.omdbapi.com/?apikey=f2f56598&i=${id}`
        );
        const data = await res.json();
        setMovie(data);
      } catch (error) {
        console.error("Error fetching movie:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchMovie();
  }, [id]);

  if (loading) return <Loading />;

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white p-6">
      <div className="max-w-6xl mx-auto">
        <Link
          to="/"
          className="inline-block mb-6 px-5 py-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg hover:scale-105 transform transition-all shadow-lg"
        >
          ← Back to Home
        </Link>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          <img
            src={movie.Poster}
            alt={movie.Title}
            className="w-full h-[500px] object-contain rounded-lg shadow-lg"
          />

          <div>
            <h1 className="text-4xl font-bold mb-4">{movie.Title}</h1>
            <p className="text-gray-300 mb-4">
              <span className="mr-4">📅 {movie.Year}</span>
              <span>⏳ {movie.Runtime}</span>
            </p>
            <p className="mb-4">{movie.Plot}</p>
            <p className="text-lg font-semibold">
              ⭐ Rating:{" "}
              <span className="text-yellow-400">{movie.imdbRating}</span> / 10
            </p>
            <p className="mt-4 text-gray-400">
              🎭 Genre: {movie.Genre} <br />
              🎬 Director: {movie.Director} <br />
              🎤 Actors: {movie.Actors}
            </p>
            <button
              onClick={() =>
                isFavorite
                  ? removeFromFavorites(movie.imdbID)
                  : addToFavorites(movie)
              }
              className={`mt-6 px-5 py-2 rounded-lg shadow-lg transition-all duration-300 cursor-pointer ${
                isFavorite
                  ? "bg-red-500 hover:bg-red-600"
                  : "bg-green-500 hover:bg-green-600"
              }`}
            >
              {isFavorite ? "💔 Remove from Favorites" : "❤️ Add to Favorites"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
