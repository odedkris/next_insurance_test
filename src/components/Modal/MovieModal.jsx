import React from "react";
import star from "../../Assets/Web 1920 – next movies/star.svg";
import arrow from "../../Assets/Web 1920 – next movies/arrow.svg";
import './Modal.css';

const MovieModal = (
  props
) => {

  if (props.movie !== null) {
    const { largeimage, runtime, rating, title, synopsis } = props.movie;

    const synopsisContent = document.createElement('textarea');
    synopsisContent.innerHTML = synopsis.slice(0, synopsis.lastIndexOf(".")+1);
    
    return (
      <div className='movie-modal'>
        <div className="movie-modal-contant">
          <div className="movie-modal-img">
            <img src={largeimage} alt="movie poster" />
          </div>
          <div className="movie-modal-details">
            <div className="movie-modal-title">
              <h1>{title}</h1>
            </div>
            <div className="movie-modal-parts">
              <p className="movie-modal-runtime">{`${runtime.slice(0, 2)} ${runtime.slice(2)}`}</p><br />
              <p className="movie-modal-rating">
                <span>
                  <img src={star} alt="star" />
                </span>
                <span>{`${rating}/10`}</span>
              </p>
              <p className='synopsis'>
                {synopsisContent.value}
              </p>
            </div>
            <div className="movie-modal-footer">
              <div className="movie-modal-actions">
                <button
                  className="movie-modal-actions-button"
                  onClick={props.onExit}
                >
                  <span className='span-img'>
                    <img src={arrow} alt="arrow" />
                  </span>
                  <span>Back to list</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  return <></>;
};

export default MovieModal;
