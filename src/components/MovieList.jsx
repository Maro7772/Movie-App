import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ movies }) => {
  if (!movies || movies.length === 0) {
    return (
      <p className="text-center text-gray-300 text-lg mt-10">
        🎬 No movies found
      </p>
    );
  }

  return (
    <div className="grid sm:grid-cols-3 gap-8">
      {movies.map((movie) => (
        <MovieCard key={movie.imdbID} movie={movie} />
      ))}
    </div>
  );
};

export default MovieList;
