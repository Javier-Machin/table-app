import React from 'react';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { render } from '@testing-library/react';
import reducer from '../store/reducers';
import App from '../App';

const middleware = [thunk];
const store = createStore(reducer, applyMiddleware(...middleware));

test('renders learn react link', () => {
  const { getByText } = render(
    <Provider store={store}>
      <App />
    </Provider>
  );
  const linkElement = getByText(/total rows/i);
  expect(linkElement).toBeInTheDocument();
});
