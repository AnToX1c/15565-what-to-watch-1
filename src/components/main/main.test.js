import React from "react";
import renderer from "react-test-renderer";
import {Main} from "./main";
import mock from "../../mocks/films";

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
