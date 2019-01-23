// @flow

import { combineReducers } from 'redux';
import { normalize } from 'normalizr';
import { createReducer, createAction, createSelector } from 'redux-starter-kit';

import { playlistList } from 'api/schema';
import * as api from 'api/logion';
import type { PlaylistBasic, Dispatch } from 'lib/types';

type State = {
  data: { playlists: PlaylistBasic[] },
};

export const STATE_KEY = 'playlists';

// Selectors
//
const selectStore = (state: State) => state.data.playlists;

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

export const selectPlaylists = createSelector(
  [selectEntities, selectIds],
  (entities, ids) => ids.map(id => entities[id]),
);

export const selectOriginalPlaylists = createSelector(
  [selectPlaylists],
  playlists => playlists.filter(playlist => playlist.type2 === 'original'),
);

export const selectRemixPlaylists = createSelector(
  [selectPlaylists],
  playlists => playlists.filter(playlist => playlist.type2 !== 'original'),
);

// Actions
//
export const fetchPlaylistsRequest = createAction('playlist/fetch/request');
export const fetchPlaylistsSuccess = createAction('playlist/fetch/success');
export const fetchPlaylistsFailure = createAction('playlist/fetch/failure');

// Reducers
//
const entities = (state = {}, action) => {
  if (action.payload && action.payload.entities) {
    return {
      ...state,
      ...action.payload.entities.playlists,
    };
  }
  return state;
};

const ids = createReducer([], {
  [fetchPlaylistsSuccess]: (state, action) => action.payload.playlistIds,
});

const isFetching = createReducer(false, {
  [fetchPlaylistsRequest]: () => true,
  [fetchPlaylistsSuccess]: () => false,
  [fetchPlaylistsFailure]: () => false,
});

const errorMessage = createReducer(null, {
  [fetchPlaylistsRequest]: () => null,
  [fetchPlaylistsSuccess]: () => null,
  [fetchPlaylistsFailure]: (state, action) => action.payload.message,
});

const playlists = combineReducers({
  entities,
  ids,
  isFetching,
  errorMessage,
});

export default playlists;

// Thunks
//
export const fetchPlaylists = () => (dispatch: Dispatch) => {
  dispatch(fetchPlaylistsRequest());

  return api.fetchPlaylists().then(
    response => {
      const { entities, result } = normalize(response, playlistList);
      dispatch(
        fetchPlaylistsSuccess({
          entities,
          playlistIds: result,
        }),
      );
    },
    error => {
      dispatch(fetchPlaylistsFailure({ error }));
    },
  );
};
