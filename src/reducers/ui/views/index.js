// @flow

import { combineReducers } from 'redux';

import dashboard from './dashboard';
import explore from './explore';
import share from './share';

const pages = combineReducers({
  dashboard,
  explore,
  share,
});

export default pages;
