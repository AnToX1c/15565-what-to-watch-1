import React from "react";
import PropTypes from "prop-types";
import SmallMovieCard from "../small-movie-card/small-movie-card";
import withVideoPlayer from "../../hocs/with-video-player";

const MovieCardWithVideoPlayer = withVideoPlayer(SmallMovieCard);

const MovieLists = ({films}) => (
  <div className="catalog__movies-list">
    {films.map((film, i) => (
      <MovieCardWithVideoPlayer
        key={i}
        film={film}
      />
    ))}
  </div>
);

MovieLists.propTypes = {
  films: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    imgsrc: PropTypes.string.isRequired,
    previewsrc: PropTypes.string.isRequired,
  }).isRequired).isRequired,
};

export default MovieLists;
