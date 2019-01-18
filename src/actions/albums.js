// @flow

import { normalize } from 'normalizr';

import * as api from '../api/logion';
import { getIsFetching } from '../reducers/data/albums';
import type { AlbumFilter, Dispatch, GetState } from '../types';

import * as schema from './schema';

export const fetchAlbums = (filter: AlbumFilter) => (dispatch: Dispatch, getState: GetState) => {
  if (getIsFetching(getState(), filter)) {
    return Promise.resolve();
  }

  dispatch({
    type: 'FETCH_ALBUMS_REQUEST',
    filter,
  });

  return api.fetchAlbums(filter).then(
    response => {
      dispatch({
        type: 'FETCH_ALBUMS_SUCCESS',
        filter,
        response: normalize(response, schema.albumList),
      });
    },
    error => {
      dispatch({
        type: 'FETCH_ALBUMS_FAILURE',
        filter,
        message: error.message || 'Something went wrong.',
      });
    },
  );
};

export const addAlbum = (text: string) => (dispatch: Dispatch) =>
  api.addAlbum(text).then(response => {
    dispatch({
      type: 'ADD_ALBUM_SUCCESS',
      response: normalize(response, schema.album),
    });
  });

export const toggleAlbum = (id: string) => ({
  type: 'TOGGLE_ALBUM',
  id,
});
