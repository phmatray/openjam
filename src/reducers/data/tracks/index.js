// @flow

import { combineReducers } from 'redux';
import { createSelector } from 'reselect';

import byId, * as fromById from './byId';
import createList, * as fromList from './createList';

const listByFilter = combineReducers({
  all: createList('all'),
  original: createList('original'),
  remix: createList('remix'),
});

const tracks = combineReducers({
  byId,
  listByFilter,
});

export default tracks;

// Selectors
//
export const getTracks = state => state.data.tracks;
export const getFilter = (state, filter) => filter;

export const getVisibleTracks = createSelector(
  [getTracks, getFilter],
  (tracks, filter) => {
    const ids = fromList.getIds(tracks.listByFilter[filter]);
    return ids.map(id => fromById.getTrack(tracks.byId, id));
  },
);

export const getIsFetching = createSelector(
  [getTracks, getFilter],
  (tracks, filter) => fromList.getIsFetching(tracks.listByFilter[filter]),
);

export const getErrorMessage = createSelector(
  [getTracks, getFilter],
  (tracks, filter) => fromList.getErrorMessage(tracks.listByFilter[filter]),
);
