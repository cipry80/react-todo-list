import React from 'react';
import { render } from 'react-dom';
import App from '../components/App'
import configStore from '../redux/store';
import { Provider } from 'react-redux';
let initialState = {
  todos: [{
    id: 0,
    completed: false,
    text: 'Initial todo demo'
  }]
}

let store =configStore(initialState);

render (
  <Provider store={store}>
  <App />
  </Provider>,
  document.getElementById('app')
);
