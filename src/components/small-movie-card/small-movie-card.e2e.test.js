import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import SmallMovieCard from "./small-movie-card";

Enzyme.configure({adapter: new Adapter()});

it(`Click on movie title should works`, () => {
  const clickHandler = jest.fn();
  const movie = {
    id: 1,
    title: `Fantastic Beasts: The Crimes of Grindelwald`,
    imgsrc: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`
  };

  const wrapper = shallow(<SmallMovieCard film={movie} onMouseOver={clickHandler}/>);
  /* eslint-disable no-console */
  console.log(wrapper.debug());
  /* eslint-enable no-console */
  expect(wrapper).toBe(true);

  // const movieTitleLink = wrapper.find(`.small-movie-card__play-btn`);
  // const movieTitleLink = wrapper.find(`.small-movie-card__link`).first();
  // expect(wrapper.exists()).to.equal(true);
  // movieTitleLink.simulate(`click`, {preventDefault() {}});

  expect(clickHandler).toHaveBeenCalledTimes(1);
});
