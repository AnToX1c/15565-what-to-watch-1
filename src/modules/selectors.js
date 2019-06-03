import initialFilms from "../mocks/films";

const getUniqueGenresSelector = (films = initialFilms) => [...new Set(films.map((film)=> film.genre))];

export default getUniqueGenresSelector;
