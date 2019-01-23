// @flow

import { combineReducers } from 'redux';
import { normalize } from 'normalizr';
import { createReducer, createAction, createSelector } from 'redux-starter-kit';

import { labelList } from 'api/schema';
import * as api from 'api/logion';
import type { LabelBasic, Dispatch } from 'lib/types';

type State = {
  data: { labels: LabelBasic[] },
};

export const STATE_KEY = 'labels';

// Selectors
//
const selectStore = (state: State) => state.data.labels;

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

export const selectLabels = createSelector(
  [selectEntities, selectIds],
  (entities, ids) => ids.map(id => entities[id]),
);

export const selectOriginalLabels = createSelector(
  [selectLabels],
  labels => labels.filter(label => label.type2 === 'original'),
);

export const selectRemixLabels = createSelector(
  [selectLabels],
  labels => labels.filter(label => label.type2 !== 'original'),
);

// Actions
//
export const fetchLabelsRequest = createAction('label/fetch/request');
export const fetchLabelsSuccess = createAction('label/fetch/success');
export const fetchLabelsFailure = createAction('label/fetch/failure');

// Reducers
//
const entities = (state = {}, action) => {
  if (action.payload && action.payload.entities) {
    return {
      ...state,
      ...action.payload.entities.labels,
    };
  }
  return state;
};

const ids = createReducer([], {
  [fetchLabelsSuccess]: (state, action) => action.payload.labelIds,
});

const isFetching = createReducer(false, {
  [fetchLabelsRequest]: () => true,
  [fetchLabelsSuccess]: () => false,
  [fetchLabelsFailure]: () => false,
});

const errorMessage = createReducer(null, {
  [fetchLabelsRequest]: () => null,
  [fetchLabelsSuccess]: () => null,
  [fetchLabelsFailure]: (state, action) => action.payload.message,
});

const labels = combineReducers({
  entities,
  ids,
  isFetching,
  errorMessage,
});

export default labels;

// Thunks
//
export const fetchLabels = () => (dispatch: Dispatch) => {
  dispatch(fetchLabelsRequest());

  return api.fetchLabels().then(
    response => {
      const { entities, result } = normalize(response, labelList);
      dispatch(
        fetchLabelsSuccess({
          entities,
          labelIds: result,
        }),
      );
    },
    error => {
      dispatch(fetchLabelsFailure({ error }));
    },
  );
};
