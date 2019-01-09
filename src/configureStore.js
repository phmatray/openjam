import { createStore, applyMiddleware, compose } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import throttle from 'lodash/throttle';

import slimAsync from './redux/middlewares/slim-async/slimAsync';
import rootReducer from './redux/rootReducer';
import openjamApp from './reducers';
import { loadState, saveState } from './redux/localStorage';

const configureStore = () => {
  const middlewares = [slimAsync, thunk];
  const enhancers = [];

  // const middlewares = [slimAsync, thunk];
  const isDevelopment = process.env.NODE_ENV !== 'production';
  if (isDevelopment) {
    // In development, use redux-logger
    middlewares.push(logger);

    // In development, use the browser's Redux dev tools extension if installed
    if (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION__) {
      enhancers.push(window.__REDUX_DEVTOOLS_EXTENSION__());
    }
  }

  // const persistedState = loadState();
  const persistedState = {};
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

  return store;
};

export default configureStore;
