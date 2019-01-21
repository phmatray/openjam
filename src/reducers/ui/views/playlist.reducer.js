// @flow

import { createSelector } from 'reselect';

import * as fromById from '../../data/playlists/byId';
import { getPlaylists } from '../../data/playlists/index';

type State = {};

// Selectors
//
export const getPlaylistId = (state: State, playlistId: string) => playlistId;

export const getPlaylist = createSelector(
  [getPlaylists, getPlaylistId],
  (playlists, playlistId) => fromById.getPlaylist(playlists.byId, playlistId),
);
