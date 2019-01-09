import { combineReducers } from 'redux';

import layout from './layout';
import player from './player';
import pages from './pages';

const data = combineReducers({
  layout,
  player,
  pages,
});

export default data;
