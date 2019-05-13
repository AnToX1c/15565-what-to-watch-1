import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import SmallMovieCard from "./small-movie-card";

Enzyme.configure({adapter: new Adapter()});

const movie = {
  id: 1,
  title: `Fantastic Beasts: The Crimes of Grindelwald`,
  imgsrc: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`
};

describe(`Click on small movie card`, () => {
  it(`should works`, () => {
    const clickHandler = jest.fn();
    const wrapper = shallow(<SmallMovieCard film={movie} onClick={clickHandler}/>);
    const playButton = wrapper.find(`.small-movie-card__play-btn`);
    expect(playButton.exists()).toBe(true);
    playButton.simulate(`click`);
    expect(clickHandler).toHaveBeenCalledTimes(1);
  });

  it(`should return movie id`, () => {
    const clickHandler = jest.fn(() => movie.id);
    const wrapper = shallow(<SmallMovieCard film={movie} onClick={clickHandler}/>);
    const playButton = wrapper.find(`.small-movie-card__play-btn`);
    playButton.simulate(`click`);
    expect(clickHandler).toHaveReturnedWith(movie.id);
  });
});


