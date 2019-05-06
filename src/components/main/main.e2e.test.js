import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Main from "./main.jsx";

Enzyme.configure({adapter: new Adapter()});

it(`Click on movie title should works`, () => {
  const clickHandler = jest.fn();
  const movieTitles = [`Fantastic Beasts`, `Bohemian Rhapsody`, `Macbeth`, `Aviator`];

  const app = shallow(
      <Main movieTitles = {movieTitles} onClick={clickHandler} />
  );

  const movieTitleLink = app.find(`.small-movie-card__link`).first();
  movieTitleLink.simulate(`click`, {preventDefault() {}});

  expect(clickHandler).toHaveBeenCalledTimes(1);
});
