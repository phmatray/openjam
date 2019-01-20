// @flow

import { normalize } from 'normalizr';

import * as api from '../../api/logion';
import { getIsFetching } from '../../reducers/data/playlists';
import type { PlaylistBasic, PlaylistFilter, Dispatch, GetState } from '../../types';

import * as schema from './schema';

export const fetchPlaylists = (filter: PlaylistFilter) => (
  dispatch: Dispatch,
  getState: GetState,
) => {
  if (getIsFetching(getState(), filter)) {
    return Promise.resolve();
  }

  dispatch({
    type: 'FETCH_PLAYLISTS_REQUEST',
    filter,
  });

  return api.fetchPlaylists(filter).then(
    response => {
      dispatch({
        type: 'FETCH_PLAYLISTS_SUCCESS',
        filter,
        response: normalize(response, schema.playlistList),
      });
    },
    error => {
      dispatch({
        type: 'FETCH_PLAYLISTS_FAILURE',
        filter,
        message: error.message || 'Something went wrong.',
      });
    },
  );
};

export const addPlaylist = (playlist: PlaylistBasic) => (dispatch: Dispatch) =>
  api.addPlaylist(playlist).then(response => {
    dispatch({
      type: 'ADD_PLAYLIST_SUCCESS',
      response: normalize(response, schema.playlist),
    });
  });

export const togglePlaylist = (id: string) => ({
  type: 'TOGGLE_PLAYLIST',
  id,
});
