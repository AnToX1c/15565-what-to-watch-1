import initialFilms from "../mocks/films";
import {createSelector} from 'reselect';

const getUniqueGenresSelector = (films = initialFilms) => [...new Set(films.map((film)=> film.genre))];

const getStateGenreSelector = createSelector((store) => store, (store) => store.genre);
const getStateListOfFilmsSelector = createSelector((store) => store, (store) => store.listOfFilms);

export {getUniqueGenresSelector, getStateGenreSelector, getStateListOfFilmsSelector};
