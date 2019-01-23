// @flow

import _ from 'lodash';
import jwtDecode from 'jwt-decode';
import { combineReducers } from 'redux';
import type { CombinedReducer } from 'redux';
import { createSelector } from 'reselect';
import type { SelectorCreator } from 'reselect';
import { createSlice, createReducer, createAction } from 'redux-starter-kit';

import type { StateRoot } from 'store/reducer';
import setAuthToken from 'lib/utils/setAuthToken';
import isEmpty from 'lib/validation/is-empty';
import type { UserBasic, LoginInput, RegisterInput, AuthAction, ThunkAction } from 'lib/types';

import { USER_ROLES } from 'config';
import { restLogout, restLogin, restRegisterActivate, restRegister } from 'api/logion';

export type StateAuth = {
  user: UserBasic,
  scope: [],
  exp: ?number,
  iat: ?number,
  accessToken: string,
  refreshToken: string,
  loading: boolean,
  isAuthenticated: boolean,
};

const Action = {
  LOAD: 'auth/LOAD',
  UPDATE_USER: 'auth/UPDATE_USER',
  UPDATE_ACCESS_TOKEN: 'auth/UPDATE_ACCESS_TOKEN',
  UPDATE_REFRESH_TOKEN: 'auth/UPDATE_REFRESH_TOKEN',
  UPDATE_ERROR: 'auth/UPDATE_ERROR',
};

// Reducer
//
const user = createSlice({
  slice: 'user',
  initialState: ({}: UserBasic),
  reducers: {
    setUser: (state, action) => action.user,
  },
});

const scope = createSlice({
  slice: 'scope',
  initialState: ([]: string[]),
  reducers: {
    setAccessToker: (state, action) => action.scope,
  },
});

const exp = createSlice({
  slice: 'exp',
  initialState: (null: ?number),
  reducers: {
    setAccessToken: (state, action) => action.exp,
  },
});

const iat = createSlice({
  slice: 'iat',
  initialState: (null: ?number),
  reducers: {
    setAccessToken: (state, action) => action.iat,
  },
});

const accessToken = createSlice({
  slice: 'accessToken',
  initialState: ('': string),
  reducers: {
    setAccessToken: (state, action) => action.accessToken,
  },
});

const refreshToken = createSlice({
  slice: 'refreshToken',
  initialState: ('': string),
  reducers: {
    setRefreshToken: (state, action) => action.refreshToken,
  },
});

const loading = createSlice({
  slice: 'loading',
  initialState: (false: boolean),
  reducers: {
    load: () => true,
    setUser: () => false,
  },
});

const isAuthenticated = createSlice({
  slice: 'isAuthenticated',
  initialState: (false: boolean),
  reducers: {
    setUser: (state, action) => !isEmpty(action.user),
  },
});

const errorMessage = createSlice({
  slice: 'errorMessage',
  initialState: (null: ?string),
  reducers: {},
});

const auth: CombinedReducer<StateAuth, AuthAction> = combineReducers({
  user: user.reducer,
  scope: scope.reducer,
  exp: exp.reducer,
  iat: iat.reducer,
  accessToken: accessToken.reducer,
  refreshToken: refreshToken.reducer,
  loading: loading.reducer,
  isAuthenticated: isAuthenticated.reducer,
  errorMessage: errorMessage.reducer,
});

export default auth;

export function loadUser(): AuthAction {
  return { type: Action.LOAD };
}

export function updateUser(user: UserBasic): AuthAction {
  return { type: Action.UPDATE_USER, user };
}

export function updateAccessToken(accessToken: string): AuthAction {
  localStorage.setItem('accessToken', accessToken);

  if (accessToken === '') {
    return {
      type: Action.UPDATE_ACCESS_TOKEN,
      accessToken: '',
      scope: [],
      exp: null,
      iat: null,
    };
  }

  return {
    type: Action.UPDATE_ACCESS_TOKEN,
    accessToken,
    ..._.pick(jwtDecode(accessToken), ['scope', 'exp', 'iat']),
  };
}

export function updateRefreshToken(refreshToken: string): AuthAction {
  localStorage.setItem('refreshToken', refreshToken);
  return { type: Action.UPDATE_REFRESH_TOKEN, refreshToken };
}

export function updateError(errorMessage: ?string = null): AuthAction {
  return { type: Action.UPDATE_ERROR, errorMessage };
}

// Side effects, only as applicable (thunks)
//
// Register User
export function registerUser(userData: RegisterInput, history: any): ThunkAction {
  return async dispatch => {
    try {
      const user = { ...userData, role: USER_ROLES.USER };
      delete user.password2;

      const res = await restRegister(user);

      if (!res.data.errmsg) {
        dispatch(updateError(null));
        history.push('/register-thanks');
      }
    } catch (error) {
      const errorMessage =
        'There was an error during the registration process. ' +
        'Please try again or contact us if you continue to have trouble creating an account.';

      dispatch(updateError({ ...error.response, message: errorMessage }));
    }
  };
}

// Register - Activate Account
export function activateAccount(token: string, history: any): ThunkAction {
  return async dispatch => {
    try {
      const res = await restRegisterActivate(token);

      if (!res.data.errmsg) {
        dispatch(updateError(null));
        history.push('/register-thanks');
      }
    } catch (error) {
      const errorMessage =
        'There was an error during the activation process. The token in your email link may be expired, ' +
        'you can request a new activation email to be sent during your next login attempt.';

      dispatch(updateError({ ...error.response, message: errorMessage }));
    }
  };
}

// Login - Get User Token
export function loginUser(userData: LoginInput): ThunkAction {
  return async dispatch => {
    try {
      const res = await restLogin(userData);
      if (res.status === 200) {
        const { accessToken, refreshToken, user } = res.data;

        setAuthToken(refreshToken);
        dispatch(updateRefreshToken(refreshToken));
        dispatch(updateAccessToken(accessToken));

        dispatch(updateUser(user));
        dispatch(updateError(null));

        // TODO: dispatch a toast notification
        // notify.success('Login successful', 'Success!')
      }
    } catch (error) {
      const { data } = error.response;
      const responseMessage = data.message;

      let errorMessage = '';

      switch (responseMessage) {
        case 'Invalid Email or Password.':
        case 'Maximum number of auth attempts reached. Please try again later.':
          errorMessage = responseMessage;
          break;

        case 'Account is inactive.':
          errorMessage =
            'You need to activate your account. Please enter your email address and ' +
            'click the link below to resend an activation email.';
          break;

        case 'Account is disabled.':
          errorMessage =
            'Your account has been disabled. Please contact the SuperAdmin ' +
            'to enable your account.';
          break;

        case 'Account is deleted.':
          errorMessage = 'This account has been deleted';
          break;

        default:
          errorMessage = 'There was an error logging in, please try again.';
          break;
      }

      dispatch(updateError({ ...data, message: errorMessage }));
    }
  };
}

// Log user out
export function logoutUser(): ThunkAction {
  return async dispatch => {
    try {
      const res = await restLogout();
      if (res.status === 200) {
        // Set current user to {} which will set isAuthenticated to false
        localStorage.removeItem('accessToken');
        localStorage.removeItem('refreshToken');
        dispatch(updateAccessToken(''));
        dispatch(updateRefreshToken(''));
        dispatch(updateUser({}));
      }
    } catch (error) {
      dispatch(updateError(error.response.data));
    }
  };
}

// Selectors
//
export const getAuth = (state: StateRoot) => state.auth;

export const getUser: SelectorCreator = createSelector(
  [getAuth],
  auth => auth.user,
);

export const getScope: SelectorCreator = createSelector(
  [getAuth],
  auth => auth.scope,
);

export const getExp: SelectorCreator = createSelector(
  [getAuth],
  auth => auth.exp,
);

export const getIat: SelectorCreator = createSelector(
  [getAuth],
  auth => auth.iat,
);

export const getAccessToken: SelectorCreator = createSelector(
  [getAuth],
  auth => auth.accessToken,
);

export const getRefreshToken: SelectorCreator = createSelector(
  [getAuth],
  auth => auth.refreshToken,
);

export const getLoading: SelectorCreator = createSelector(
  [getAuth],
  auth => auth.loading,
);

export const getIsAuthenticated: SelectorCreator = createSelector(
  [getAuth],
  auth => auth.isAuthenticated,
);
