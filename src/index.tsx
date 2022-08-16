import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { reducer, StateProvider } from "./state";

ReactDOM.render(
    //Use custom state management
  <StateProvider reducer={reducer}>
    <App />
  </StateProvider>,
    //mount => root node
  document.getElementById('root')
);
