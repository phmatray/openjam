// @flow

import { combineReducers } from 'redux';
import { normalize } from 'normalizr';
import { createReducer, createAction, createSelector } from 'redux-starter-kit';

import { artistList } from 'api/schema';
import * as api from 'api/logion';
import type { ArtistBasic, Dispatch } from 'lib/types';

type State = {
  data: { artists: ArtistBasic[] },
};

export const STATE_KEY = 'artists';

export const fetchArtistsRequest = createAction('artists/fetch/request');
export const fetchArtistsSuccess = createAction('artists/fetch/success');
export const fetchArtistsFailure = createAction('artists/fetch/failure');

// Selectors
//
const selectStore = (state: State) => state.data.artists;
export const selectArtistId = (state: State, props) => props.artistId;

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

export const selectArtist = createSelector(
  [selectEntities, selectArtistId],
  (entities, artistId) => entities[artistId],
);

export const selectArtists = createSelector(
  [selectEntities, selectIds],
  (entities, ids) => ids.map(id => entities[id]),
);

// Reducers
//
const entities = (state = {}, action) => {
  if (action.payload && action.payload.entities) {
    return {
      ...state,
      ...action.payload.entities.artists,
    };
  }
  return state;
};

const ids = createReducer([], {
  [fetchArtistsSuccess]: (state, action) => action.payload.artistIds,
});

const isFetching = createReducer(false, {
  [fetchArtistsRequest]: () => true,
  [fetchArtistsSuccess]: () => false,
  [fetchArtistsFailure]: () => false,
});

const errorMessage = createReducer(null, {
  [fetchArtistsRequest]: () => null,
  [fetchArtistsSuccess]: () => null,
  [fetchArtistsFailure]: (state, action) => action.payload.message,
});

const artists = combineReducers({
  entities,
  ids,
  isFetching,
  errorMessage,
});

export default artists;

// Thunks
//
export const fetchArtists = () => (dispatch: Dispatch) => {
  dispatch(fetchArtistsRequest());

  return api.fetchArtists().then(
    response => {
      const { entities, result } = normalize(response, artistList);
      dispatch(
        fetchArtistsSuccess({
          artistEntities: entities.artists,
          artistIds: result,
        }),
      );
    },
    error => {
      dispatch(fetchArtistsFailure({ error }));
    },
  );
};
