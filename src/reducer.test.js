import {
  ActionCreator,
  reducer,
} from "./reducer";

const films = [
  {
    id: 1,
    title: `Fantastic Beasts: The Crimes of Grindelwald`,
    imgsrc: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
    previewsrc: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
    genre: `Thrillers`
  },
  {
    id: 2,
    title: `Bohemian Rhapsody`,
    imgsrc: `img/bohemian-rhapsody.jpg`,
    previewsrc: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
    genre: `Dramas`
  },
  {
    id: 3,
    title: `Macbeth`,
    imgsrc: `img/macbeth.jpg`,
    previewsrc: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
    genre: `Kids & Family`
  },
  {
    id: 4,
    title: `Aviator`,
    imgsrc: `img/aviator.jpg`,
    previewsrc: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
    genre: `Comedies`
  },
  {
    id: 5,
    title: `We need to talk about Kevin`,
    imgsrc: `img/we-need-to-talk-about-kevin.jpg`,
    previewsrc: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
    genre: `Comedies`
  },
];
const mockState = {
  genre: `All genres`,
  listOfFilms: films,
};

describe(`Action creators work correctly`, () => {
  it(`Action creator for changing genre returns correct action`, () => {
    expect(ActionCreator.changeFilterByGenre(`genre`)).toEqual({
      type: `CHANGE_GENRE`,
      payload: `genre`
    });
  });

  it(`Action creator for geting filtered films returns action type "SHOW_ALL_MOVIES"`, () => {
    expect(ActionCreator.getFilteredFilmsByGenre(`All genres`)).toEqual({
      type: `SHOW_ALL_MOVIES`,
    });
  });

  it(`Action creator for geting filtered films returns action type "GET_MOVIES"`, () => {
    expect(ActionCreator.getFilteredFilmsByGenre(`All_genres`)).toEqual({
      type: `GET_MOVIES`,
      payload: `All_genres`
    });
  });
});

describe(`Reducer works correctly`, () => {
  it(`Reducer without additional parameters should return initial state`, () => {
    expect(reducer(undefined, {})).toEqual({
      genre: `All genres`,
      listOfFilms: films,
    });
  });

  it(`Reducer should change current genre to given genre (New_genre)`, () => {
    expect(reducer(mockState, {
      type: `CHANGE_GENRE`,
      payload: `New_genre`,
    })).toEqual({
      genre: `New_genre`,
      listOfFilms: films,
    });
  });

  it(`Reducer should change current listOFilms, filtered by genre (Comedies)`, () => {
    expect(reducer({
      genre: `Comedies`,
      listOfFilms: [],
    }, {
      type: `GET_MOVIES`,
      payload: `Comedies`,
    })).toEqual({
      genre: `Comedies`,
      listOfFilms: [{
        id: 4,
        title: `Aviator`,
        imgsrc: `img/aviator.jpg`,
        previewsrc: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
        genre: `Comedies`
      },
      {
        id: 5,
        title: `We need to talk about Kevin`,
        imgsrc: `img/we-need-to-talk-about-kevin.jpg`,
        previewsrc: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
        genre: `Comedies`
      }],
    });
  });

  it(`Reducer should correctly reset state by default and return initial state`, () => {
    expect(reducer({
      genre: `Comedies`,
      listOfFilms: [],
    }, {
      type: `SHOW_ALL_MOVIES`,
      payload: ``,
    })).toEqual({
      genre: `All genres`,
      listOfFilms: films,
    });
  });
});
