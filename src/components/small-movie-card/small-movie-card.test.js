import React from "react";
import renderer from "react-test-renderer";
import SmallMovieCard from "./small-movie-card";

const mock = {
  id: 1,
  title: `Fantastic Beasts: The Crimes of Grindelwald`,
  imgsrc: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
  previewsrc: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`
};

const isPlaying = false;

it(`SmallMovieCard page correctly renders`, () => {
  const tree = renderer
    .create(<SmallMovieCard film={mock} isPlaying={isPlaying} onMouseEnter={jest.fn()}/>)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
