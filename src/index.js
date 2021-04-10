import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {createStore} from 'redux'
import rootReducers from './Reducers/rootReducers';
import {Provider} from 'react-redux'


const store = createStore(rootReducers)

ReactDOM.render(
  <Provider store={store}>
    <App />
    </Provider>,
  document.getElementById('root')
);
