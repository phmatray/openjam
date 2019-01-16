import { normalize } from 'normalizr';
import * as schema from './schema';
import * as api from '../api/logion';
import { getIsFetching } from '../reducers/data/tracks';

export const fetchTracks = filter => (dispatch, getState) => {
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
        response: normalize(response, schema.trackListSchema),
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

export const addTrack = text => dispatch =>
  api.addTrack(text).then(response => {
    dispatch({
      type: 'ADD_TRACK_SUCCESS',
      response: normalize(response, schema.trackSchema),
    });
  });

export const toggleTrack = id => ({
  type: 'TOGGLE_TRACK',
  id,
});
