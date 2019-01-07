import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import throttle from 'lodash/throttle';

import slimAsync from './middlewares/slim-async/slimAsync';
import rootReducer from './rootReducer';
import { loadState, saveState } from './localStorage';

const persistedState = loadState();

const middlewares = [slimAsync, thunk];
const enhancers = [];

const isDevelopment = process.env.NODE_ENV === 'development';

// In development, use redux-logger
// if (isDevelopment) {
//   const { logger } = require(`redux-logger`);
//   middlewares.push(logger);
// }

// In development, use the browser's Redux dev tools extension if installed
if (isDevelopment && typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION__) {
  enhancers.push(window.__REDUX_DEVTOOLS_EXTENSION__());
}

const store = createStore(
  rootReducer,
  persistedState,
  compose(
    applyMiddleware(...middlewares),
    ...enhancers,
  ),
);

store.subscribe(
  throttle(() => {
    saveState(store.getState());
  }, 1000),
);

console.log(store.getState());

export default store;
