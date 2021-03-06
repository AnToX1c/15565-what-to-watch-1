import React from "react";
import PropTypes from "prop-types";
import VideoPlayer from "../video-player/video-player";

const SmallMovieCard = ({film, activeFilm, onMouseEnter}) => (
  <article className="small-movie-card catalog__movies-card"
    onMouseEnter={() => onMouseEnter(film.id)}
    onMouseLeave={() => onMouseEnter(null)}
  >
    <VideoPlayer
      imgsrc={film.imgsrc}
      previewsrc={film.previewsrc}
      isPlaying={activeFilm === film.id}
      muted={true}
    />
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
    previewsrc: PropTypes.string.isRequired,
  }).isRequired,
  onMouseEnter: PropTypes.func.isRequired,
  activeFilm: PropTypes.oneOfType([
    PropTypes.number.isRequired,
    PropTypes.instanceOf(null).isRequired,
  ])
};

export default React.memo(SmallMovieCard);
