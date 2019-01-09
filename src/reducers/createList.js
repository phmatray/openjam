import { combineReducers } from 'redux';

const createList = filter => {
  const ids = (state = [], action) => {
    switch (action.type) {
      case 'FETCH_TRACKS_SUCCESS':
        return filter === action.filter ? action.response : state;
      case 'ADD_TRACK_SUCCESS':
        return filter !== 'completed' ? [...state, action.response] : state;
      default:
        return state;
    }
  };

  const isFetching = (state = false, action) => {
    if (filter !== action.filter) {
      return state;
    }
    switch (action.type) {
      case 'FETCH_TRACKS_REQUEST':
        return true;
      case 'FETCH_TRACKS_SUCCESS':
      case 'FETCH_TRACKS_FAILURE':
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
      case 'FETCH_TRACKS_FAILURE':
        return action.message;
      case 'FETCH_TRACKS_REQUEST':
      case 'FETCH_TRACKS_SUCCESS':
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
