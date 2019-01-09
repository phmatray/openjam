import { combineReducers } from 'redux';
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

export const getVisibleTracks = (state, filter) => {
  const ids = fromList.getIds(state.listByFilter[filter]);
  return ids.map(id => fromById.getTrack(state.byId, id));
};

export const getIsFetching = (state, filter) => fromList.getIsFetching(state.listByFilter[filter]);

export const getErrorMessage = (state, filter) =>
  fromList.getErrorMessage(state.listByFilter[filter]);
