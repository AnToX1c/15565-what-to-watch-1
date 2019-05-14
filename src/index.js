import React from "react";
import ReactDOM from "react-dom";
import Main from "./components/main/main";
import films from "./mocks/films";

const init = () => {
  ReactDOM.render(<Main films = {films}/>, document.getElementById(`root`));
};

init();
