// @flow

import { normalize } from 'normalizr';

import * as api from '../api/logion';
import { getIsFetching } from '../reducers/data/labels';
import type { LabelFilter, Dispatch, GetState } from '../types';

import * as schema from './schema';

export const fetchLabels = (filter: LabelFilter) => (dispatch: Dispatch, getState: GetState) => {
  if (getIsFetching(getState(), filter)) {
    return Promise.resolve();
  }

  dispatch({
    type: 'FETCH_LABELS_REQUEST',
    filter,
  });

  return api.fetchLabels(filter).then(
    response => {
      dispatch({
        type: 'FETCH_LABELS_SUCCESS',
        filter,
        response: normalize(response, schema.labelList),
      });
    },
    error => {
      dispatch({
        type: 'FETCH_LABELS_FAILURE',
        filter,
        message: error.message || 'Something went wrong.',
      });
    },
  );
};

export const addLabel = (text: string) => (dispatch: Dispatch) =>
  api.addLabel(text).then(response => {
    dispatch({
      type: 'ADD_LABEL_SUCCESS',
      response: normalize(response, schema.label),
    });
  });

export const toggleLabel = (id: string) => ({
  type: 'TOGGLE_LABEL',
  id,
});
