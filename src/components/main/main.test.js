import React from "react";
import renderer from "react-test-renderer";
import Main from "./main";

const mock = [
  {
    id: 1,
    title: `Fantastic Beasts: The Crimes of Grindelwald`,
    imgsrc: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`
  },
  {
    id: 2,
    title: `Bohemian Rhapsody`,
    imgsrc: `img/bohemian-rhapsody.jpg`
  },
  {
    id: 3,
    title: `Macbeth`,
    imgsrc: `img/macbeth.jpg`
  }
];

it(`Main page correctly renders`, () => {
  const tree = renderer
    .create(<Main films = {mock}/>)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
