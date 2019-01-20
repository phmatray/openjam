// @flow

import { combineReducers } from 'redux';

import type { AlbumFilter, AlbumAction } from '../../../types';

type StateIds = {}[];
type StateIsFetching = boolean;
type StateErrorMessage = ?string;

type State = {
  ids: any,
  isFetching: any,
  errorMessage: any,
};

const createList = (filter: AlbumFilter) => {
  const ids = (state: StateIds = [], action: AlbumAction) => {
    switch (action.type) {
      case 'FETCH_ALBUMS_SUCCESS':
        return filter === action.filter ? action.response.result : state;
      case 'ADD_ALBUM_SUCCESS':
        return [...state, action.response.result];
      default:
        return state;
    }
  };

  const isFetching = (state: StateIsFetching = false, action: AlbumAction) => {
    if (filter !== action.filter) {
      return state;
    }
    switch (action.type) {
      case 'FETCH_ALBUMS_REQUEST':
        return true;
      case 'FETCH_ALBUMS_SUCCESS':
      case 'FETCH_ALBUMS_FAILURE':
        return false;
      default:
        return state;
    }
  };

  const errorMessage = (state: StateErrorMessage = null, action: AlbumAction) => {
    if (filter !== action.filter) {
      return state;
    }
    switch (action.type) {
      case 'FETCH_ALBUMS_FAILURE':
        return action.message;
      case 'FETCH_ALBUMS_REQUEST':
      case 'FETCH_ALBUMS_SUCCESS':
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
