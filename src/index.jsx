// external modules
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { logger } from 'redux-logger';

// internal modules
import App from './components/app';
import '../assets/stylesheets/application.scss';
import messagesListReducer from './reducers/messages-list-reducer';
import channelsListReducer from './reducers/channels-list-reducer';
import selectedChanelReducer from './reducers/selected-channel-reducer';
import currentUsernameReducer from './reducers/current-username-reducer';

// import actions

import { initialState } from './actions';

// State and reducers
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const middlewares = composeEnhancers(applyMiddleware(logger));

const reducers = combineReducers({
  messages: messagesListReducer,
  channels: channelsListReducer,
  selectedChannel: selectedChanelReducer,
  currentUser: currentUsernameReducer
});

// render an instance of the component in the DOM
ReactDOM.render(
  <Provider store={createStore(reducers, {}, middlewares)}>
    <App />
  </Provider>,
  document.getElementById('root')
);
