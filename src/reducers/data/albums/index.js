// @flow

import { combineReducers } from 'redux';
import { createSelector } from 'reselect';

import type { AlbumFilter, AlbumBasic } from '../../../types';

import byId, * as fromById from './byId';
import createList, * as fromList from './createList';

type State = {
  data: { albums: AlbumBasic[] },
};

const listByFilter = combineReducers({
  all: createList('all'),
});

const albums = combineReducers({
  byId,
  listByFilter,
});

export default albums;

// Selectors
//
export const getAlbums = (state: State) => state.data.albums;
export const getFilter = (state: State, filter: AlbumFilter) => filter;

export const getVisibleAlbums = createSelector(
  [getAlbums, getFilter],
  (albums, filter) => {
    const ids = fromList.getIds(albums.listByFilter[filter]);
    return ids.map(id => fromById.getAlbum(albums.byId, id));
  },
);

export const getIsFetching = createSelector(
  [getAlbums, getFilter],
  (albums, filter) => fromList.getIsFetching(albums.listByFilter[filter]),
);

export const getErrorMessage = createSelector(
  [getAlbums, getFilter],
  (albums, filter) => fromList.getErrorMessage(albums.listByFilter[filter]),
);
