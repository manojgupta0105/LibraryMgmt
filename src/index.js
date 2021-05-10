import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import Library from './Container/Library';
import { store } from './store';

const App = () => (
  <Provider store={store}>
    <Library />
  </Provider>
);

ReactDOM.render(<App />, document.getElementById('root'));
