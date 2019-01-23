// @flow

import { combineReducers } from 'redux';
import { normalize } from 'normalizr';
import { createReducer, createAction, createSelector } from 'redux-starter-kit';

import { albumList } from 'api/schema';
import * as api from 'api/logion';
import type { AlbumBasic, Dispatch } from 'lib/types';

type State = {
  data: { albums: AlbumBasic[] },
};

export const STATE_KEY = 'albums';

// Selectors
//
const selectStore = (state: State) => state.data.albums;

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

export const selectAlbums = createSelector(
  [selectEntities, selectIds],
  (entities, ids) => ids.map(id => entities[id]),
);

// Actions
//
export const fetchAlbumsRequest = createAction('album/fetch/request');
export const fetchAlbumsSuccess = createAction('album/fetch/success');
export const fetchAlbumsFailure = createAction('album/fetch/failure');

// Reducers
//
const entities = (state = {}, action) => {
  if (action.payload && action.payload.entities) {
    return {
      ...state,
      ...action.payload.entities.albums,
    };
  }
  return state;
};

const ids = createReducer([], {
  [fetchAlbumsSuccess]: (state, action) => action.payload.albumIds,
});

const isFetching = createReducer(false, {
  [fetchAlbumsRequest]: () => true,
  [fetchAlbumsSuccess]: () => false,
  [fetchAlbumsFailure]: () => false,
});

const errorMessage = createReducer(null, {
  [fetchAlbumsRequest]: () => null,
  [fetchAlbumsSuccess]: () => null,
  [fetchAlbumsFailure]: (state, action) => action.payload.message,
});

const albums = combineReducers({
  entities,
  ids,
  isFetching,
  errorMessage,
});

export default albums;

// Thunks
//
export const fetchAlbums = () => (dispatch: Dispatch) => {
  dispatch(fetchAlbumsRequest());

  return api.fetchAlbums().then(
    response => {
      const { entities, result } = normalize(response, albumList);
      dispatch(
        fetchAlbumsSuccess({
          albumEntities: entities.albums,
          albumIds: result,
        }),
      );
    },
    error => {
      dispatch(fetchAlbumsFailure({ error }));
    },
  );
};
