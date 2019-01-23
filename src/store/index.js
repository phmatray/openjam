// @flow

import { configureStore, getDefaultMiddleware } from 'redux-starter-kit';
import logger from 'redux-logger';

import reducer from './reducer';

const middleware = [...getDefaultMiddleware(), logger];
const preloadedState = {};

const store = configureStore({
  reducer,
  middleware,
  devTools: process.env.NODE_ENV !== 'production',
  preloadedState,
  enhancers: [],
});

export default store;
