import React from "react";
import { Movie } from "../models/movie";
import star from "../Assets/Web 1920 – next movies/star.svg";
import arrow from "../Assets/Web 1920 – next movies/arrow.svg";

const MovieItem: React.FC<{
  movie: Movie;
  chooseMovieHandler: (movie: Movie) => void;
}> = (props) => {
  const { id, image, title, released, rating } = props.movie;

  const clickMovieHandler = (event: React.MouseEvent) => {
    event.preventDefault();
    props.chooseMovieHandler(props.movie);
  };

  return (
    <article id={`article_${id}`}>
      <img src={image} alt="img" />
      <h3>{`${title} (${released})`}</h3>
      <p className="movie-item-rating">
        <span>
          <img src={star} alt="star" />
        </span>
        <span>{rating}</span>
      </p>
      <p className="movie-item-actions">
        <button
          className="movie-item-actions-button"
          onClick={clickMovieHandler}
        >
          <span> Read more</span>
          <span>
            <img src={arrow} alt="" />
          </span>
        </button>
      </p>
    </article>
  );
};

export default MovieItem;
