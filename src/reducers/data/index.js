// @flow

import { combineReducers } from 'redux';

import album from './album';
import artists from './artists';
import error from './error';
import label from './label';
import playlist from './playlist';
import profile from './profile';
import track from './track';
import tracks from './tracks';

const data = combineReducers({
  album,
  artists,
  error,
  label,
  playlist,
  profile,
  track,
  tracks,
});

export default data;
