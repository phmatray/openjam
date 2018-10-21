import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import slimAsync from './middlewares/slim-async/slimAsync';
import rootReducer from './rootReducer';

const initialState = {};

const middlewares = [thunk, slimAsync];
const enhancers = [];

const isDevelopment = process.env.NODE_ENV === 'development';

// In development, use redux-logger
// if (isDevelopment) {
//   const { logger } = require(`redux-logger`);
//   middlewares.push(logger);
// }

// In development, use the browser's Redux dev tools extension if installed
if (isDevelopment && typeof window !== 'undefined' && window.devToolsExtension) {
  enhancers.push(window.devToolsExtension());
}

const store = createStore(
  rootReducer,
  initialState,
  compose(
    applyMiddleware(...middlewares),
    ...enhancers,
  ),
);

export default store;
