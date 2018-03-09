import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import ReduxPromise from 'redux-promise';

import App from './containers/App';
import allReducers from './redux/reducers/reducers';


const store = applyMiddleware(ReduxPromise)(createStore);
const jsx = (
  <Provider store={store(allReducers)}>
    <App />
  </Provider>
);

ReactDOM.render(jsx, document.getElementById('root'));
