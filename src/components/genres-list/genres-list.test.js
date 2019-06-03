import React from "react";
import renderer from "react-test-renderer";
import GenresList from "./genres-list";

const mock = [`All genres`, `Thrillers`, `Dramas`, `Kids & Family`, `Comedies`];

it(`GenresList page correctly renders`, () => {
  const tree = renderer
    .create(
        <GenresList genres={mock} onClick={jest.fn()} activeGenre={mock[0]} />
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
