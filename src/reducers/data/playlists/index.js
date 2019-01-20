// @flow

import { combineReducers } from 'redux';
import { createSelector } from 'reselect';

import type { PlaylistFilter, PlaylistBasic } from '../../../types';

import byId, * as fromById from './byId';
import createList, * as fromList from './createList';

type State = {
  data: { playlists: PlaylistBasic[] },
};

const listByFilter = combineReducers({
  all: createList('all'),
});

const playlists = combineReducers({
  byId,
  listByFilter,
});

export default playlists;

// Selectors
//
export const getPlaylists = (state: State) => state.data.playlists;
export const getFilter = (state: State, filter: PlaylistFilter) => filter;

export const getVisiblePlaylists = createSelector(
  [getPlaylists, getFilter],
  (playlists, filter) => {
    const ids = fromList.getIds(playlists.listByFilter[filter]);
    return ids.map(id => fromById.getPlaylist(playlists.byId, id));
  },
);

export const getIsFetching = createSelector(
  [getPlaylists, getFilter],
  (playlists, filter) => fromList.getIsFetching(playlists.listByFilter[filter]),
);

export const getErrorMessage = createSelector(
  [getPlaylists, getFilter],
  (playlists, filter) => fromList.getErrorMessage(playlists.listByFilter[filter]),
);
