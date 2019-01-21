// @flow

import { combineReducers } from 'redux';
import { createSelector } from 'reselect';

import types from '../../actions/types/auth-types';
import isEmpty from '../../lib/validation/is-empty';
import type { UserBasic, AuthAction } from '../../types';

type State = {
  auth: {
    user: UserBasic,
    scope: [],
    exp: number,
    iat: number,
    accessToken: string,
    refreshToken: string,
    loading: boolean,
    isAuthenticated: boolean,
  },
};

// Reducer
//
const user = (state: UserBasic = {}, action: AuthAction) => {
  switch (action.type) {
    case types.UPDATE_USER:
      return action.user;
    default:
      return state;
  }
};

const scope = (state: [] = [], action: AuthAction) => {
  switch (action.type) {
    case types.UPDATE_ACCESS_TOKEN:
      return action.scope;
    default:
      return state;
  }
};

const exp = (state: ?number = null, action: AuthAction) => {
  switch (action.type) {
    case types.UPDATE_ACCESS_TOKEN:
      return action.exp;
    default:
      return state;
  }
};

const iat = (state: ?number = null, action: AuthAction) => {
  switch (action.type) {
    case types.UPDATE_ACCESS_TOKEN:
      return action.iat;
    default:
      return state;
  }
};

const accessToken = (state: string = '', action: AuthAction) => {
  switch (action.type) {
    case types.UPDATE_ACCESS_TOKEN:
      return action.accessToken;
    default:
      return state;
  }
};

const refreshToken = (state: string = '', action: AuthAction) => {
  switch (action.type) {
    case types.UPDATE_REFRESH_TOKEN:
      return action.refreshToken;
    default:
      return state;
  }
};

const loading = (state: boolean = false, action: AuthAction) => {
  switch (action.type) {
    case types.LOAD:
      return true;
    case types.UPDATE_USER:
      return false;
    default:
      return state;
  }
};

const isAuthenticated = (state: boolean = false, action: AuthAction) => {
  switch (action.type) {
    case types.UPDATE_USER:
      return !isEmpty(action.user);
    default:
      return state;
  }
};

const errorMessage = (state: ?string = null, action: AuthAction) => {
  switch (action.type) {
    default:
      return state;
  }
};

const auth = combineReducers({
  user,
  scope,
  exp,
  iat,
  accessToken,
  refreshToken,
  loading,
  isAuthenticated,
  errorMessage,
});

export default auth;

// Selectors
//
export const getAuth = (state: State) => state.auth;

export const getUser = createSelector(
  [getAuth],
  auth => auth.user,
);

export const getScope = createSelector(
  [getAuth],
  auth => auth.scope,
);

export const getExo = createSelector(
  [getAuth],
  auth => auth.exp,
);

export const getIat = createSelector(
  [getAuth],
  auth => auth.iat,
);

export const getAccessToken = createSelector(
  [getAuth],
  auth => auth.accessToken,
);

export const getRefreshToken = createSelector(
  [getAuth],
  auth => auth.refreshToken,
);

export const getLoading = createSelector(
  [getAuth],
  auth => auth.loading,
);

export const getIsAuthenticated = createSelector(
  [getAuth],
  auth => auth.isAuthenticated,
);
