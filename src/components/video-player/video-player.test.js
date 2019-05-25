import React from "react";
import renderer from "react-test-renderer";
import VideoPlayer from "./video-player";

const mock = {
  imgsrc: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
  previewsrc: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
  isPlaying: true,
  muted: true,
};

it(`VideoPlayer page correctly renders`, () => {
  const {imgsrc, previewsrc, isPlaying, muted} = mock;
  const tree = renderer
    .create(<VideoPlayer
      imgsrc={imgsrc}
      previewsrc={previewsrc}
      isPlaying={isPlaying}
      muted={muted}/>)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
