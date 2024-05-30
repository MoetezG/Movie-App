import { useEffect, useState } from "react";
import "./App.css";
import Movie from "./Components/Movie";
import Search from "./Components/Search";

function App() {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("superman");
  useEffect(() => {
    const getMovies = async () => {
      const response = await fetch(
        `https://www.omdbapi.com/?s=${searchTerm}&apikey=eb3bb894`
      );
      const data = await response.json();
      setMovies(data.Search);
    };
    getMovies();
  }),
    [searchTerm];
  return (
    <div className="app">
      <h1>FORJAFLIX</h1>
      <Search
        searchTrm={(Term) => {
          setSearchTerm(Term);
        }}
      />
      <div className="container">
        {movies.map((movie) => (
          <Movie key={movie.imdbID} movie={movie} />
        ))}
      </div>
    </div>
  );
}

export default App;
