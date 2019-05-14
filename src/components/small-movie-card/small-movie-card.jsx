import React from "react";
import PropTypes from "prop-types";

const SmallMovieCard = ({film, onClick}) => (
  <article className="small-movie-card catalog__movies-card">
    <button className="small-movie-card__play-btn" type="button" onClick={() => onClick(film.id)}>Play</button>
    <div className="small-movie-card__image">
      <img src={film.imgsrc} alt={film.title} width="280" height="175" />
    </div>
    <h3 className="small-movie-card__title">
      <a className="small-movie-card__link" href="movie-page.html">{film.title}</a>
    </h3>
  </article>
);

SmallMovieCard.propTypes = {
  film: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    imgsrc: PropTypes.string.isRequired,
  }).isRequired,
  onClick: PropTypes.func.isRequired,
};

export default React.memo(SmallMovieCard);
