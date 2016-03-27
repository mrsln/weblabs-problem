import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import shapes from './reducers/shapes';
import App from './containers/App';

const store = createStore(shapes);

render(
  <Provider store={store}>
    <App />
  </Provider>
  , document.getElementById('root')
);
