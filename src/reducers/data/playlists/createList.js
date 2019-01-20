// @flow

import { combineReducers } from 'redux';

import type { PlaylistFilter, PlaylistAction } from '../../../types';

type StateIds = {}[];
type StateIsFetching = boolean;
type StateErrorMessage = ?string;

type State = {
  ids: any,
  isFetching: any,
  errorMessage: any,
};

const createList = (filter: PlaylistFilter) => {
  const ids = (state: StateIds = [], action: PlaylistAction) => {
    switch (action.type) {
      case 'FETCH_PLAYLISTS_SUCCESS':
        return filter === action.filter ? action.response.result : state;
      case 'ADD_PLAYLIST_SUCCESS':
        return [...state, action.response.result];
      default:
        return state;
    }
  };

  const isFetching = (state: StateIsFetching = false, action: PlaylistAction) => {
    if (filter !== action.filter) {
      return state;
    }
    switch (action.type) {
      case 'FETCH_PLAYLISTS_REQUEST':
        return true;
      case 'FETCH_PLAYLISTS_SUCCESS':
      case 'FETCH_PLAYLISTS_FAILURE':
        return false;
      default:
        return state;
    }
  };

  const errorMessage = (state: StateErrorMessage = null, action: PlaylistAction) => {
    if (filter !== action.filter) {
      return state;
    }
    switch (action.type) {
      case 'FETCH_PLAYLISTS_FAILURE':
        return action.message;
      case 'FETCH_PLAYLISTS_REQUEST':
      case 'FETCH_PLAYLISTS_SUCCESS':
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
