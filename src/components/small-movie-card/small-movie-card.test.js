import React from "react";
import renderer from "react-test-renderer";
import SmallMovieCard from "./small-movie-card";

const mock = {
  id: 1,
  title: `Fantastic Beasts: The Crimes of Grindelwald`,
  imgsrc: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`
};

it(`SmallMovieCard page correctly renders`, () => {
  const tree = renderer
    .create(<SmallMovieCard film={mock} onMouseOver={jest.fn()}/>)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
