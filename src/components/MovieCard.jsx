import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { FavoritesContext } from "../context/FavoritesContext";

const MovieCard = ({ movie }) => {
  const { favorites, addToFavorites, removeFromFavorites } =
    useContext(FavoritesContext);
  const isFavorite = favorites.some((fav) => fav.imdbID === movie.imdbID);

  return (
    <div className="relative flex">
      <Link to={`/movie/${movie.imdbID}`} className="block">
        <div className="h-full bg-gray-800 shadow-lg rounded-lg overflow-hidden flex flex-col transform hover:scale-105 hover:shadow-xl transition-all duration-300">
          <img
            src={
              movie.Poster !== "N/A"
                ? movie.Poster
                : "https://via.placeholder.com/300x445?text=No+Image"
            }
            alt={movie.Title}
            className="w-full h-80 object-cover"
          />
          <div className="p-4 flex flex-col flex-grow justify-between">
            <h3 className="text-lg font-semibold text-white line-clamp-2">
              {movie.Title}
            </h3>
            <p className="text-gray-400">{movie.Year}</p>
          </div>
        </div>
      </Link>
      <button
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          isFavorite
            ? removeFromFavorites(movie.imdbID)
            : addToFavorites(movie);
        }}
        className={`absolute top-2 right-2 px-2 py-1 text-sm rounded ${
          isFavorite ? "bg-red-500 text-white" : "bg-yellow-500 text-black"
        }`}
      >
        {isFavorite ? "Remove" : "Favorite"}
      </button>
    </div>
  );
};

export default MovieCard;
