import React from "react";
import star from "../../Assets/Web 1920 – next movies/star.svg";
import arrow from "../../Assets/Web 1920 – next movies/arrow.svg";
import './MovieItem.css';

const MovieItem = (props) => {
  const { id, image, title, released, rating } = props.movie;

  const clickMovieHandler = (event) => {
    event.preventDefault();
    props.onChooseMovieHandler(props.movie);
  };

  return (
    <article data-testid={`article_${id}`}>
      <img src={image} alt="img" data-testid='movie-image'/>
      <h3>{`${title} (${released})`}</h3>
      <p className="movie-item-rating">
        <span>
          <img src={star} alt="star" data-testid='star-icon'/>
        </span>
        <span data-testid='rating'>{rating}</span>
      </p>
      <p className="movie-item-actions">
        <button
          className="movie-item-actions-button"
          onClick={clickMovieHandler}
        >
          <span> Read more</span>
          <span>
            <img src={arrow} alt="arrow" />
          </span>
        </button>
      </p>
    </article>
  );
};

export default MovieItem;
