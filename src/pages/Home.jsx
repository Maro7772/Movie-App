import React, { useState } from "react";
import SearchBar from "../components/SearchBar";

const Home = () => {
  const [show, setShow] = useState(true);

  return (
    <div className="min-h-screen bg-gradient-to-br from-black to-white flex flex-col items-center justify-center p-6 text-white">
      {show ? (
        <div className="text-center animate-fadeIn">
          <h1 className="text-5xl font-extrabold drop-shadow-lg">
            🎬 Welcome to <span className="text-blue-300">Movie App</span>
          </h1>
          <p className="mt-4 text-lg opacity-90 max-w-xl mx-auto">
            Discover your favorite movies and TV shows with detailed ratings,
            trailers, and more.
          </p>
          <button
            onClick={() => setShow(false)}
            className="mt-8 px-8 py-3 bg-blue-400 text-black font-bold rounded-full shadow-lg transform transition duration-300 hover:scale-105 hover:bg-blue-300 cursor-pointer"
          >
            🚀 Get Started
          </button>
        </div>
      ) : (
        <div className="w-full max-w-3xl animate-slideUp">
          <SearchBar />
        </div>
      )}
    </div>
  );
};

export default Home;
