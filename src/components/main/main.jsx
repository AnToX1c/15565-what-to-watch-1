import React, {Component} from "react";
import PropTypes from 'prop-types';
import {connect} from "react-redux";

import MovieLists from "../movie-lists/movie-lists";
import HeaderMovieCard from "../header-movie-card/header-movie-card";
import GenresList from "../genres-list/genres-list";
import Footer from "../footer/footer";
import {getUniqueGenresSelector, getStateGenreSelector, getStateListOfFilmsSelector} from "../../modules/selectors";
import {ActionCreator} from "../../reducer";

class Main extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {onGenreClick, getListOfFilms, genre, listOfFilms} = this.props;

    return <React.Fragment>
      <HeaderMovieCard/>

      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>

          <GenresList
            genres = {[`All genres`, ...getUniqueGenresSelector()]}
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
}

const mapStateToProps = (state) => ({
  genre: getStateGenreSelector(state),
  listOfFilms: getStateListOfFilmsSelector(state),
});

const mapDispatchToProps = {
  onGenreClick: ActionCreator.changeFilterByGenre,
  getListOfFilms: ActionCreator.getFilteredFilmsByGenre,
};

Main.propTypes = {
  onGenreClick: PropTypes.func.isRequired,
  getListOfFilms: PropTypes.func.isRequired,
  genre: PropTypes.string.isRequired,
  listOfFilms: PropTypes.array.isRequired,
};

export {Main};

export default connect(mapStateToProps, mapDispatchToProps)(Main);
