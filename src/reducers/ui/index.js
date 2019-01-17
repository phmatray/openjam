// @flow

import { combineReducers } from 'redux';

import layout from './layout';
import player from './player';
import views from './views';

const data = combineReducers({
  layout,
  player,
  views,
});

export default data;
