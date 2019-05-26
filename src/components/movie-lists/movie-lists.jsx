import React, {Component} from "react";
import PropTypes from "prop-types";
import SmallMovieCard from "../small-movie-card/small-movie-card";

class MovieLists extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeFilmId: null,
    };

    this._timeoutId = null;
    this._handleOnMouseEnter = this._handleOnMouseEnter.bind(this);
  }

  render() {
    const {films} = this.props;
    const {activeFilmId} = this.state;
    return films.map((film, i) => (
      <SmallMovieCard
        key={i}
        film={film}
        onMouseEnter={this._handleOnMouseEnter}
        isPlaying={activeFilmId === film.id}
      />
    ));
  }

  _handleOnMouseEnter(id) {
    if (id === null) {
      this.setState({
        activeFilmId: id,
      });
      if (this._timeoutId) {
        clearTimeout(this._timeoutId);
      }
    } else {
      this._timeoutId = setTimeout(() => {
        this.setState({
          activeFilmId: id,
        });
      }, 1000);
    }
  }
}

MovieLists.propTypes = {
  films: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    imgsrc: PropTypes.string.isRequired,
    previewsrc: PropTypes.string.isRequired,
  }).isRequired).isRequired,
};

export default MovieLists;
