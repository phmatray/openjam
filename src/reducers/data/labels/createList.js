// @flow

import { combineReducers } from 'redux';

import type { LabelFilter, LabelAction } from '../../../types';

type StateIds = {}[];
type StateIsFetching = boolean;
type StateErrorMessage = ?string;

type State = {
  ids: any,
  isFetching: any,
  errorMessage: any,
};

const createList = (filter: LabelFilter) => {
  const ids = (state: StateIds = [], action: LabelAction) => {
    switch (action.type) {
      case 'FETCH_LABELS_SUCCESS':
        return filter === action.filter ? action.response.result : state;
      case 'ADD_LABEL_SUCCESS':
        return [...state, action.response.result];
      default:
        return state;
    }
  };

  const isFetching = (state: StateIsFetching = false, action: LabelAction) => {
    if (filter !== action.filter) {
      return state;
    }
    switch (action.type) {
      case 'FETCH_LABELS_REQUEST':
        return true;
      case 'FETCH_LABELS_SUCCESS':
      case 'FETCH_LABELS_FAILURE':
        return false;
      default:
        return state;
    }
  };

  const errorMessage = (state: StateErrorMessage = null, action: LabelAction) => {
    if (filter !== action.filter) {
      return state;
    }
    switch (action.type) {
      case 'FETCH_LABELS_FAILURE':
        return action.message;
      case 'FETCH_LABELS_REQUEST':
      case 'FETCH_LABELS_SUCCESS':
        return null;
      default:
        return state;
    }
  };

  return combineReducers({
    ids,
    isFetching,
    errorMessage,
  });
};

export default createList;

export const getIds = (state: State) => state.ids;
export const getIsFetching = (state: State) => state.isFetching;
export const getErrorMessage = (state: State) => state.errorMessage;
