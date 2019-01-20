// @flow

import { combineReducers } from 'redux';
import { createSelector } from 'reselect';

import type { LabelFilter, LabelBasic } from '../../../types';

import byId, * as fromById from './byId';
import createList, * as fromList from './createList';

type State = {
  data: { labels: LabelBasic[] },
};

const listByFilter = combineReducers({
  all: createList('all'),
});

const labels = combineReducers({
  byId,
  listByFilter,
});

export default labels;

// Selectors
//
export const getLabels = (state: State) => state.data.labels;
export const getFilter = (state: State, filter: LabelFilter) => filter;

export const getVisibleLabels = createSelector(
  [getLabels, getFilter],
  (labels, filter) => {
    const ids = fromList.getIds(labels.listByFilter[filter]);
    return ids.map(id => fromById.getLabel(labels.byId, id));
  },
);

export const getIsFetching = createSelector(
  [getLabels, getFilter],
  (labels, filter) => fromList.getIsFetching(labels.listByFilter[filter]),
);

export const getErrorMessage = createSelector(
  [getLabels, getFilter],
  (labels, filter) => fromList.getErrorMessage(labels.listByFilter[filter]),
);
