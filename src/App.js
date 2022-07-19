import { React } from "react";
import { useEffect, useState } from "react";
import { FaSearch } from 'react-icons/fa';
import MovieCard from './MovieCard';

// e3baa0ff

const API_URL = 'http://www.omdbapi.com/?apikey=e3baa0ff';

const movie1 = {
  "Title": "Batman Begins",
  "Year": "2005",
  "imdbID": "tt0372784",
  "Type": "movie",
  "Poster": "https://m.media-amazon.com/images/M/MV5BOTY4YjI2N2MtYmFlMC00ZjcyLTg3YjEtMDQyM2ZjYzQ5YWFkXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg"
}

const App = () => {

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    setMovies(data.Search);
  }

  const [movies, setMovies] = useState([]);

  useEffect(() => {
    searchMovies('batman');
  }, [])

  return (
    <div className="w-full">
      <div className="app w-[80%] mx-auto">
        <h1 className="text-center font-bold text-gray-800 text-5xl my-8">Movie Library</h1>

        <div className="search mx-auto border-2 rounded-lg w-1/2 border-gray-400 text-base h-10 px-2 py-1 flex justify-between items-center">
          <input type="text" placeholder="Search movies" className="focus:outline-none w-full" value='Batman' onChange={()=> {}}/>
          <FaSearch size={"1.25em"} onClick={()=>{}}/>
        </div>


        {movies?.length > 0 
          ? (
            <div className="container mt-16 mx-auto flex justify-between flex-wrap">
              {movies.map((movie) => (
                <MovieCard movie={movie} />
              ))}
            </div>
          ) : (
            <div className="container mt-16 mx-auto">
              <h1 className="text-center font-bold text-gray-800 text-5xl my-8">No movies found</h1>
            </div>
          )}

        
      </div>
    </div>
  );
}
export default App;

//   "Title": "Batman Begins",
//   "Year": "2005",
//   "imdbID": "tt0372784",
//   "Type": "movie",
//   "Poster": "https://m.media-amazon.com/images/M/MV5BOTY4YjI2N2MtYmFlMC00ZjcyLTg3YjEtMDQyM2ZjYzQ5YWFkXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg"
