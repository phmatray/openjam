// @flow

import { combineReducers } from 'redux';

import type { ArtistFilter, Action } from '../../../types';

type StateIds = {}[];
type StateIsFetching = boolean;
type StateErrorMessage = ?string;

type State = {
  ids: any,
  isFetching: any,
  errorMessage: any,
};

const createList = (filter: ArtistFilter) => {
  const ids = (state: StateIds = [], action: Action) => {
    switch (action.type) {
      case 'FETCH_ARTISTS_SUCCESS':
        return filter === action.filter ? action.response.result : state;
      case 'ADD_ARTIST_SUCCESS':
        return filter !== 'completed' ? [...state, action.response.result] : state;
      default:
        return state;
    }
  };

  const isFetching = (state: StateIsFetching = false, action: Action) => {
    if (filter !== action.filter) {
      return state;
    }
    switch (action.type) {
      case 'FETCH_ARTISTS_REQUEST':
        return true;
      case 'FETCH_ARTISTS_SUCCESS':
      case 'FETCH_ARTISTS_FAILURE':
        return false;
      default:
        return state;
    }
  };

  const errorMessage = (state: StateErrorMessage = null, action: Action) => {
    if (filter !== action.filter) {
      return state;
    }
    switch (action.type) {
      case 'FETCH_ARTISTS_FAILURE':
        return action.message;
      case 'FETCH_ARTISTS_REQUEST':
      case 'FETCH_ARTISTS_SUCCESS':
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
