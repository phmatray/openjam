import { combineReducers } from 'redux';

import auth from './modules/auth';
import errors from './modules/error';
import profile from './modules/profile';
import post from './modules/post';
import github from './modules/github';
import artist from './modules/artist';
import album from './modules/album';
import label from './modules/label';
import track from './modules/track';
import player from './modules/player';

const reducers = {
  auth,
  errors,
  profile,
  post,
  github,
  artist,
  album,
  label,
  track,
  player,
};

const rootReducer = combineReducers(reducers);

export default rootReducer;
