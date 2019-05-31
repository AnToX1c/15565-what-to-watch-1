import React, {Component} from "react";
import PropTypes from 'prop-types';
import {connect} from "react-redux";

import MovieLists from "../movie-lists/movie-lists";
import HeaderMovieCard from "../header-movie-card/header-movie-card";
import GenresList from "../genres-list/genres-list";
import Footer from "../footer/footer";
import {ActionCreator} from "../../reducer";

class Main extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {films, onGenreClick, getListOfFilms, genre, listOfFilms} = this.props;

    return <React.Fragment>
      <HeaderMovieCard/>

      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>

          <GenresList
            genres = {[`All genres`, ...this._getUniqueGenres(films)]}
            onClick={(targetGenre) => {
              onGenreClick(targetGenre);
              getListOfFilms(targetGenre);
            }}
            activeGenre={genre}
          />

          <MovieLists films = {listOfFilms}/>

          <div className="catalog__more">
            <button className="catalog__button" type="button">
              Show more
            </button>
          </div>
        </section>

        <Footer/>
      </div>
    </React.Fragment>;
  }

  _getUniqueGenres(films) {
    return films.map((film)=> film.genre).filter((value, index, self) => self.indexOf(value) === index);
  }
}

const mapStateToProps = (state) => ({
  genre: state.genre,
  listOfFilms: state.listOfFilms,
});

const mapDispatchToProps = (dispatch) => ({
  onGenreClick: (genre) => dispatch(ActionCreator.changeFilterByGenre(genre)),
  getListOfFilms: (genre) => dispatch(ActionCreator.getFilteredFilmsByGenre(genre)),
});

Main.propTypes = {
  films: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    imgsrc: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
  }).isRequired).isRequired,
  onGenreClick: PropTypes.func.isRequired,
  getListOfFilms: PropTypes.func.isRequired,
  genre: PropTypes.string.isRequired,
  listOfFilms: PropTypes.array.isRequired,
};

export {Main};

export default connect(mapStateToProps, mapDispatchToProps)(Main);
