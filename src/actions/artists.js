// @flow

import { normalize } from 'normalizr';
import * as schema from './schema';
import * as api from '../api/logion';
import { getIsFetching } from '../reducers/data/artists';

export const fetchArtists = filter => (dispatch, getState) => {
  if (getIsFetching(getState(), filter)) {
    return Promise.resolve();
  }

  dispatch({
    type: 'FETCH_ARTISTS_REQUEST',
    filter,
  });

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

export const addArtist = text => dispatch =>
  api.addArtist(text).then(response => {
    dispatch({
      type: 'ADD_ARTIST_SUCCESS',
      response: normalize(response, schema.artist),
    });
  });

export const toggleArtist = id => ({
  type: 'TOGGLE_ARTIST',
  id,
});
