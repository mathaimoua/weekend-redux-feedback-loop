import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';

import logger from 'redux-logger';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';

const reducer = (state = {feeling: '', understanding: '', support: '', comments: ''}, action) => {
  if (action.type === 'SAVE_FEELING') {
    return {...state, feeling: action.payload.feeling};
  }
  if (action.type === 'SAVE_UNDERSTANDING') {
    return {...state, understanding: action.payload.understanding};
  }
  if (action.type === 'SAVE_SUPPORT') {
    return {...state, support: action.payload.support};
  }
  if (action.type === 'SAVE_COMMENTS') {
    return {...state, comments: action.payload.comments};
  }
  return state;
}

const storeInstance = createStore(
  combineReducers({
    reducer
  }),
  applyMiddleware(logger),
);

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
