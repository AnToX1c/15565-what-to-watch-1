import React from "react";
import renderer from "react-test-renderer";
import MovieLists from "./movie-lists";

const mock = [
  {
    id: 1,
    title: `Fantastic Beasts: The Crimes of Grindelwald`,
    imgsrc: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
    previewsrc: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`
  },
  {
    id: 2,
    title: `Bohemian Rhapsody`,
    imgsrc: `img/bohemian-rhapsody.jpg`,
    previewsrc: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`
  },
  {
    id: 3,
    title: `Macbeth`,
    imgsrc: `img/macbeth.jpg`,
    previewsrc: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`
  }
];

it(`MovieLists page correctly renders`, () => {
  const tree = renderer
    .create(<MovieLists films={mock}/>)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
