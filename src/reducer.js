import films from "./mocks/films";

const initialState = {
  genre: `All genres`,
  listOfFilms: films,
};

const ActionCreator = {
  changeFilterByGenre: (genre) => ({
    type: `CHANGE_GENRE`,
    payload: genre
  }),
  getFilteredFilmsByGenre: (genre) => {
    if (genre === initialState.genre) {
      return {type: `SHOW_ALL_MOVIES`};
    } else {
      return {
        type: `GET_MOVIES`,
        payload: genre
      };
    }
  }
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case `CHANGE_GENRE`: return Object.assign({}, state, {
      genre: action.payload,
    });
    case `GET_MOVIES`: return Object.assign({}, state, {
      listOfFilms: initialState.listOfFilms.filter((film) => film.genre === action.payload),
    });
    case `SHOW_ALL_MOVIES`: return Object.assign({}, initialState);
  }

  return state;
};

export {
  reducer,
  ActionCreator
};
