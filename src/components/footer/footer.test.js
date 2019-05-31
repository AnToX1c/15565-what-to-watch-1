import React from "react";
import renderer from "react-test-renderer";
import Footer from "./footer";

it(`Footer page correctly renders`, () => {
  const tree = renderer
    .create(<Footer/>)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
