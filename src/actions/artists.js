// @flow

import { normalize } from 'normalizr';

import * as api from '../api/logion';
import { getIsFetching } from '../reducers/data/artists';
import type { ArtistFilter, Dispatch, GetState } from '../types';

import * as schema from './schema';

export const fetchArtists = (filter: ArtistFilter) => (dispatch: Dispatch, getState: GetState) => {
  if (getIsFetching(getState(), filter)) {
    return Promise.resolve();
  }

  dispatch({ type: 'FETCH_ARTISTS_REQUEST', filter });

  return api.fetchArtists(filter).then(
    response => {
      dispatch({
        type: 'FETCH_ARTISTS_SUCCESS',
        filter,
        response: normalize(response, schema.artistList),
      });
    },
    error => {
      dispatch({
        type: 'FETCH_ARTISTS_FAILURE',
        filter,
        message: error.message || 'Something went wrong.',
      });
    },
  );
};

export const addArtist = (text: string) => (dispatch: Dispatch) =>
  api.addArtist(text).then(response => {
    dispatch({
      type: 'ADD_ARTIST_SUCCESS',
      response: normalize(response, schema.artist),
    });
  });

export const toggleArtist = (id: string) => ({
  type: 'TOGGLE_ARTIST',
  id,
});
