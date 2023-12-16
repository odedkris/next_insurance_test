import MovieItem from "../MovieItem/MovieItem";
import './Movies.css'

const Movies = (props) => {

  return (
    <ul id="movies" data-testid='movies-list'>
      {props.movies.map((movie) => (
        <li key={movie.id} className='movie-item'>
          <MovieItem movie={movie} onChooseMovieHandler={props.onChooseMovie} />
        </li>
      ))}
    </ul> 
  );
};

export default Movies;
