import MovieItem from "./MovieItem/MovieItem";
import MovieModal from "./Modal/MovieModal";

import { useState } from "react";

const Movies = (props) => {
  const [showModal, setShowModal] = useState(false);
  const [choosedMovie, setChoosedMovie] = useState(null);

  const chooseMovieHandler = (movie) => {
    setChoosedMovie(movie);
    setShowModal(true);
  };

  const exitMovieHandler = () => {
    setChoosedMovie(null);
    setShowModal(false);
  };

  return (
    <ul id="movies">
      {props.movies.map((movie) => (
        <li key={movie.id} className='movie-item'>
          <MovieItem movie={movie} chooseMovieHandler={chooseMovieHandler} />
        </li>
      ))}
      {showModal && <MovieModal movie={choosedMovie} onExit={exitMovieHandler} />}
    </ul> 
  );
};

export default Movies;
