import React from "react";
import renderer from "react-test-renderer";
import {Main} from "./main";

const mock = [
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
  }
];

it(`Main page correctly renders`, () => {
  const tree = renderer
    .create(
        <Main
          films={mock}
          onGenreClick={jest.fn()}
          getListOfFilms={jest.fn()}
          genre={`All genres`}
          listOfFilms={mock}
        />
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
