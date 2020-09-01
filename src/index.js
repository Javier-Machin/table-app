import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
// import reducer from './store/reducers';
import App from './App';
import * as serviceWorker from './serviceWorker';
import './css/index.css';

// thunk isn't needed in this challenge but it's what I would use to handle async actions
// const middleware = [thunk];

// if (process.env.NODE_ENV !== 'production') {
//   middleware.push(createLogger());
// }

// const store = createStore(reducer, applyMiddleware(...middleware));

render(
  // <Provider store={store}>
  <App />,
  // </Provider>,
  document.getElementById('root')
);

serviceWorker.unregister();
