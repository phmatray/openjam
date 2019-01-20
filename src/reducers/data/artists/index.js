// @flow

import { combineReducers } from 'redux';
import { createSelector } from 'reselect';

import type { ArtistFilter, ArtistBasic } from '../../../types';

import byId, * as fromById from './byId';
import createList, * as fromList from './createList';

type State = {
  data: { artists: ArtistBasic[] },
};

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
export const getArtists = (state: State) => state.data.artists;
export const getFilter = (state: State, filter: ArtistFilter) => filter;

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
