// @flow

import { normalize } from 'normalizr';

import * as api from '../api/logion';
import { getIsFetching } from '../reducers/data/tracks';
import type { TrackFilter, Dispatch, GetState } from '../types';

import * as schema from './schema';

export const fetchTracks = (filter: TrackFilter) => (dispatch: Dispatch, getState: GetState) => {
  if (getIsFetching(getState(), filter)) {
    return Promise.resolve();
  }

  dispatch({
    type: 'FETCH_TRACKS_REQUEST',
    filter,
  });

  return api.fetchTracks(filter).then(
    response => {
      dispatch({
        type: 'FETCH_TRACKS_SUCCESS',
        filter,
        response: normalize(response, schema.trackList),
      });
    },
    error => {
      dispatch({
        type: 'FETCH_TRACKS_FAILURE',
        filter,
        message: error.message || 'Something went wrong.',
      });
    },
  );
};

export const addTrack = (text: string) => (dispatch: Dispatch) =>
  api.addTrack(text).then(response => {
    dispatch({
      type: 'ADD_TRACK_SUCCESS',
      response: normalize(response, schema.track),
    });
  });

export const toggleTrack = (id: string) => ({
  type: 'TOGGLE_TRACK',
  id,
});
