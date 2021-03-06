import { combineReducers } from 'redux';

import layout from './modules/layout';
import auth from './modules/auth';
import errors from './modules/error';
import pageArtist from './modules/page-artist';
import pageDashboard from './modules/page-dashboard';
import pageExplore from './modules/page-explore';
import pageTrack from './modules/page-track';
import pageAlbum from './modules/page-album';
import pageShare from './modules/page-share';
import profile from './modules/profile';
import artist from './modules/artist';
import album from './modules/album';
import label from './modules/label';
import track from './modules/track';
import player from './modules/player';
import playlist from './modules/playlist';

import tracks from '../reducers';

const reducers = {
  layout,
  auth,
  errors,
  pageArtist,
  pageDashboard,
  pageExplore,
  pageTrack,
  pageAlbum,
  pageShare,
  profile,
  artist,
  album,
  label,
  playlist,
  track,
  player,

  tracks,
};

const rootReducer = combineReducers(reducers);

export default rootReducer;
