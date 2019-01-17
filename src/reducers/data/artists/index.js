// @flow

import { combineReducers } from 'redux';
import { createSelector } from 'reselect';

import byId, * as fromById from './byId';
import createList, * as fromList from './createList';

const listByFilter = combineReducers({
  all: createList('all'),
});

const artists = combineReducers({
  byId,
  listByFilter,
});

export default artists;

// Selectors
//
export const getArtists = state => state.data.artists;
export const getFilter = (state, filter) => filter;

export const getVisibleArtists = createSelector(
  [getArtists, getFilter],
  (artists, filter) => {
    const ids = fromList.getIds(artists.listByFilter[filter]);
    return ids.map(id => fromById.getArtist(artists.byId, id));
  },
);

export const getIsFetching = createSelector(
  [getArtists, getFilter],
  (artists, filter) => fromList.getIsFetching(artists.listByFilter[filter]),
);

export const getErrorMessage = createSelector(
  [getArtists, getFilter],
  (artists, filter) => fromList.getErrorMessage(artists.listByFilter[filter]),
);
