import React from "react";
import renderer from "react-test-renderer";
import HeaderMovieCard from "./header-movie-card";

it(`HeaderMovieCard page correctly renders`, () => {
  const tree = renderer
    .create(<HeaderMovieCard/>)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
