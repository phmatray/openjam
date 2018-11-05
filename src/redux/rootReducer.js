import { combineReducers } from 'redux';

import layout from './modules/layout';
import auth from './modules/auth';
import errors from './modules/error';
import pageTrack from './modules/page-track';
import profile from './modules/profile';
import post from './modules/post';
import github from './modules/github';
import artist from './modules/artist';
import album from './modules/album';
import label from './modules/label';
import track from './modules/track';
import player from './modules/player';
import playlist from './modules/playlist';

const reducers = {
  layout,
  auth,
  errors,
  pageTrack,
  profile,
  post,
  github,
  artist,
  album,
  label,
  playlist,
  track,
  player,
};

const rootReducer = combineReducers(reducers);

export default rootReducer;
