import React from "react";
import ReactDOM from "react-dom";
import Main from "./components/main/main.jsx";

const init = () => {
  const movieTitles = [`Fantastic Beasts`, `Bohemian Rhapsody`, `Macbeth`, `Aviator`];
  ReactDOM.render(<Main movieTitles = {movieTitles}/>, document.getElementById(`root`));
};

init();
