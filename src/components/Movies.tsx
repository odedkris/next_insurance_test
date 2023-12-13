import { Movie } from "../models/movie";
import MovieItem from "./MovieItem";
import { useState, useEffect } from "react";

const Movies: React.FC<{
  movies: Movie[];
  onChooseMovie: (movie: Movie) => void;
}> = (props) => {
  return (
    <ul id="movies">
      {props.movies.map((movie: Movie) => (
        <li key={movie.id} className='movie-item'>
          <MovieItem movie={movie} chooseMovieHandler={props.onChooseMovie} />
        </li>
      ))}
    </ul>
  );
};

export default Movies;
