import React from "react";
import ReactDOM from "react-dom";
import {createStore} from "redux";
import {Provider} from "react-redux";

import Main from "./components/main/main";
import films from "./mocks/films";
import {reducer} from "./reducer";

const store = createStore(reducer);

const init = () => {
  ReactDOM.render(<Provider store={store}>
    <Main films = {films}/>
  </Provider>,
  document.getElementById(`root`));
};

init();
