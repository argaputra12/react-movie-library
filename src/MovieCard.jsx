import React from "react";

const MovieCard = ({movie}) => {
  return(
    <div className="movie-card w-[350px]">
    <div className="card w-[300px] text-gray-800" >
      <div className="card-image w-full overflow-hidden bg-gray-700 rounded-xl">
        <img src={movie.Poster !== 'N/A' ? movie.Poster : 'https://via.placeholder.com/400'} alt={movie.Title} className="rounded-xl hover:opacity-10 duration-200 w-[300px] h-[450px]"/>
      </div>
        <div className="card-content relative flex flex-col justify-start opacity-100 top-[-112px] rounded-b-xl px-4 h-28">
          <div className="card-title font-semibold text-2xl mt-8 text-gray-100">{movie.Title}</div>
          <div className="card-year italic text-gray-400">{movie.Year}</div>
        </div>
    </div>
    </div>
  )
}

export default MovieCard;