import React, {Component} from "react";
import PropTypes from "prop-types";
import SmallMovieCard from "../small-movie-card/small-movie-card";

class MovieLists extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeFilmId: null,
    };
  }

  render() {
    const {films} = this.props;
    return films.map((film, i) => (
      <SmallMovieCard film={film} onClick={(id) => {
        this.setState({
          activeFilmId: id,
        });
      }} key={i}/>
    ));
  }
}

MovieLists.propTypes = {
  films: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    imgsrc: PropTypes.string.isRequired,
  }).isRequired).isRequired,
};

export default MovieLists;
