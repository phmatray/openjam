// @flow

import { combineReducers } from 'redux';

import albums from './albums';
import artists from './artists';
import labels from './labels';
import playlists from './playlists';
import tracks from './tracks';
import error from './error';
import profile from './profile';

const data = combineReducers({
  albums,
  artists,
  labels,
  playlists,
  tracks,
  error,
  profile,
});

export default data;
