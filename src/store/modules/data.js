// @flow

import { combineReducers } from 'redux';
import type { CombinedReducer } from 'redux';

import type { Action } from 'lib/types';
import albums, { STATE_KEY as ALBUMS_STATE_KEY } from './data/albums';
import artists, { STATE_KEY as ARTISTS_STATE_KEY } from './data/artists';
import labels, { STATE_KEY as LABELS_STATE_KEY } from './data/labels';
import playlists, { STATE_KEY as PLAYLISTS_STATE_KEY } from './data/playlists';
import tracks, { STATE_KEY as TRACKS_STATE_KEY } from './data/tracks';
import error from './data/error';
import profile from './data/profile';

export type StateData = {
  albums: any,
  artists: any,
  labels: any,
  playlists: any,
  tracks: any,
  error: any,
  profile: any,
};

const reducers = {
  [ALBUMS_STATE_KEY]: albums,
  [ARTISTS_STATE_KEY]: artists,
  [LABELS_STATE_KEY]: labels,
  [PLAYLISTS_STATE_KEY]: playlists,
  [TRACKS_STATE_KEY]: tracks,
  error,
  profile,
};

const data: CombinedReducer<StateData, Action> = combineReducers(reducers);

export default data;
