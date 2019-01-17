// @flow

import { combineReducers } from 'redux';

import auth from './auth';
import data from './data';
import ui from './ui';

const reducers = {
  auth,
  data,
  ui,
};

const rootReducer = combineReducers(reducers);

export default rootReducer;
