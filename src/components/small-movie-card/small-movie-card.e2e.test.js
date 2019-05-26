import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import SmallMovieCard from "./small-movie-card";

Enzyme.configure({adapter: new Adapter()});

const movie = {
  id: 1,
  title: `Fantastic Beasts: The Crimes of Grindelwald`,
  imgsrc: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
  previewsrc: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`
};

const isPlaying = false;

describe(`Hover on small movie card`, () => {
  it(`should return movie id value`, () => {
    const onMouseEnterHandler = jest.fn(() => movie.id);
    const wrapper = shallow(<SmallMovieCard film={movie} isPlaying={isPlaying} onMouseEnter={onMouseEnterHandler}/>);
    const movieCard = wrapper.find(`.small-movie-card`);
    movieCard.simulate(`mouseenter`);
    expect(onMouseEnterHandler).toHaveReturnedWith(movie.id);
  });
});


