// @flow

import { combineReducers } from 'redux';
import { normalize } from 'normalizr';
import { createReducer, createAction, createSelector } from 'redux-starter-kit';

import { trackList } from 'api/schema';
import * as api from 'api/logion';
import type { TrackBasic, Dispatch } from 'lib/types';

type State = {
  data: { tracks: TrackBasic[] },
};

export const STATE_KEY = 'tracks';

// Selectors
//
const selectStore = (state: State) => state.data.tracks;

const selectEntities = createSelector(
  [selectStore],
  store => store.entities,
);

const selectIds = createSelector(
  [selectStore],
  store => store.ids,
);

export const selectIsFetching = createSelector(
  [selectStore],
  store => store.isFetching,
);

export const selectErrorMessage = createSelector(
  [selectStore],
  store => store.errorMessage,
);

export const selectTracks = createSelector(
  [selectEntities, selectIds],
  (entities, ids) => ids.map(id => entities[id]),
);

export const selectOriginalTracks = createSelector(
  [selectTracks],
  tracks => tracks.filter(track => track.type2 === 'original'),
);

export const selectRemixTracks = createSelector(
  [selectTracks],
  tracks => tracks.filter(track => track.type2 !== 'original'),
);

// Actions
//
export const fetchTracksRequest = createAction('track/fetch/request');
export const fetchTracksSuccess = createAction('track/fetch/success');
export const fetchTracksFailure = createAction('track/fetch/failure');

// Reducers
//
const entities = (state = {}, action) => {
  if (action.payload && action.payload.entities) {
    return {
      ...state,
      ...action.payload.entities.tracks,
    };
  }
  return state;
};

const ids = createReducer([], {
  [fetchTracksSuccess]: (state, action) => action.payload.trackIds,
});

const isFetching = createReducer(false, {
  [fetchTracksRequest]: () => true,
  [fetchTracksSuccess]: () => false,
  [fetchTracksFailure]: () => false,
});

const errorMessage = createReducer(null, {
  [fetchTracksRequest]: () => null,
  [fetchTracksSuccess]: () => null,
  [fetchTracksFailure]: (state, action) => action.payload.message,
});

const tracks = combineReducers({
  entities,
  ids,
  isFetching,
  errorMessage,
});

export default tracks;

// Thunks
//
export const fetchTracks = () => (dispatch: Dispatch) => {
  dispatch(fetchTracksRequest());

  return api.fetchTracks().then(
    response => {
      const { entities, result } = normalize(response, trackList);
      dispatch(
        fetchTracksSuccess({
          entities,
          trackIds: result,
        }),
      );
    },
    error => {
      dispatch(fetchTracksFailure({ error }));
    },
  );
};
