import React from "react";
import renderer from "react-test-renderer";
import Main from "./main.jsx";

it(`Main page correctly renders`, () => {
  const movieTitles = [`Fantastic Beasts`, `Bohemian Rhapsody`, `Macbeth`, `Aviator`];
  const tree = renderer
    .create(<Main movieTitles = {movieTitles}/>)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
