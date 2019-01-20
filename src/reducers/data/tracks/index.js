// @flow

import { combineReducers } from 'redux';
import { createSelector } from 'reselect';

import type { TrackFilter, TrackBasic } from '../../../types';

import byId, * as fromById from './byId';
import createList, * as fromList from './createList';

type State = {
  data: {
    tracks: TrackBasic[],
  },
};

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
export const getTracks = (state: State) => state.data.tracks;
export const getFilter = (state: State, filter: TrackFilter) => filter;

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
