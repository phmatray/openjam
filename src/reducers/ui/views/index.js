// @flow

import { combineReducers } from 'redux';

import album from './album';
import artist from './artist';
import dashboard from './dashboard';
import explore from './explore';
import share from './share';
import track from './track';

const pages = combineReducers({
  album,
  artist,
  dashboard,
  explore,
  share,
  track,
});

export default pages;
