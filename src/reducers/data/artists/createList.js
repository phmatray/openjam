// @flow

import { combineReducers } from 'redux';

const createList = filter => {
  const ids = (state = [], action) => {
    switch (action.type) {
      case 'FETCH_ARTISTS_SUCCESS':
        return filter === action.filter ? action.response.result : state;
      case 'ADD_ARTIST_SUCCESS':
        return filter !== 'completed' ? [...state, action.response.result] : state;
      default:
        return state;
    }
  };

  const isFetching = (state = false, action) => {
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

  const errorMessage = (state = null, action) => {
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

export const getIds = state => state.ids;
export const getIsFetching = state => state.isFetching;
export const getErrorMessage = state => state.errorMessage;
