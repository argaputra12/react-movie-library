import { React } from "react";
import { useEffect } from "react";
import { FaSearch } from 'react-icons/fa';

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
    console.log(data.Search);
  }

  useEffect(() => {
    searchMovies('batman');
  }, [])

  return (
    <div className="w-full">
      <div className="app w-[80%] mx-auto">
        <h1 className="text-center font-bold text-gray-800 text-2xl my-8">Movie Library</h1>

        <div className="search mx-auto border-2 rounded-lg w-1/2 border-gray-400 text-base h-10 px-2 py-1 flex justify-between">
          <input type="text" placeholder="Search movies" className="focus:outline-none w-full" value='Batman' onChange={()=> {}}/>
          <FaSearch size={"1.5em"} onClick={()=>{}}/>
        </div>


        <div className="container mt-16 mx-auto flex justify-between flex-warp">
          <div className="card w-[300px] h-[444px]">
            <div className="card-image h-full rounded-xl w-full overflow-hidden hover:opacity-50 transition-opacity">
              <img src={movie1.Poster !== 'N/A' ? movie1.Poster : 'https://via.placeholder.com/400'} alt={movie1.Title}/>
            </div>
            <div className="card-content relative top-[-444px]">
              <div className="card-title">{movie1.Title}</div>
              <div className="card-year">{movie1.Year}</div>
              <div className="card-type">{movie1.Type}</div>
            </div>
          </div>
        </div>
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
