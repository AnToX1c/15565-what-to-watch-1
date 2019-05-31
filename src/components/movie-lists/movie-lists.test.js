import React from "react";
import renderer from "react-test-renderer";
import MovieLists from "./movie-lists";
import mock from "../../mocks/films";

it(`MovieLists page correctly renders`, () => {
  const tree = renderer
    .create(<MovieLists films={mock}/>)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
