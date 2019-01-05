import _ from 'lodash';
import jwtDecode from 'jwt-decode';

import { actions as errorActions } from './error';
import isEmpty from '../../utils/validation/is-empty';
import setAuthToken from '../../utils/setAuthToken';
import { USER_ROLES } from '../../config';
import {
  restLogout,
  restLogin,
  restRegisterActivate,
  restRegister,
} from '../../services/logionApi';

// Actions
//
export const types = {
  LOAD: 'auth/LOAD',
  UPDATE_USER: 'auth/UPDATE_USER',
  UPDATE_ACCESS_TOKEN: 'auth/UPDATE_ACCESS_TOKEN',
  UPDATE_REFRESH_TOKEN: 'auth/UPDATE_REFRESH_TOKEN',
};

// Reducer
//
export const initialState = {
  user: {},
  scope: [],
  exp: 0,
  iat: 0,
  accessToken: '',
  refreshToken: '',

  loading: false,
  isAuthenticated: false,
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case types.LOAD:
      return {
        ...state,
        loading: true,
      };

    case types.UPDATE_USER:
      return {
        ...state,
        isAuthenticated: !isEmpty(action.payload),
        user: action.payload,
        loading: false,
      };

    case types.UPDATE_ACCESS_TOKEN:
      return {
        ...state,
        scope: action.payload.scope,
        exp: action.payload.exp,
        iat: action.payload.iat,
        accessToken: action.payload.accessToken,
      };

    case types.UPDATE_REFRESH_TOKEN:
      return {
        ...state,
        refreshToken: action.payload,
      };

    default:
      return state;
  }
};

export default reducer;

// Action Creators
//
export const actions = {
  loadUser: () => ({ type: types.LOAD }),

  updateUser: payload => ({ type: types.UPDATE_USER, payload }),

  updateAccessToken: accessToken => {
    localStorage.setItem('accessToken', accessToken);

    const payload =
      accessToken === initialState.accessToken
        ? _.pick(initialState, ['accessToken', 'scope', 'exp', 'iat'])
        : { accessToken, ..._.pick(jwtDecode(accessToken), ['scope', 'exp', 'iat']) };

    return { type: types.UPDATE_ACCESS_TOKEN, payload };
  },

  updateRefreshToken: refreshToken => {
    localStorage.setItem('refreshToken', refreshToken);
    return { type: types.UPDATE_REFRESH_TOKEN, refreshToken };
  },
};

// Side effects, only as applicable (thunks)
//
// Register User
export const registerUser = (userData, history) => async dispatch => {
  try {
    const user = { ...userData, role: USER_ROLES.USER };
    delete user.password2;

    const res = await restRegister(user);

    if (!res.data.errmsg) {
      dispatch(errorActions.updateErrors({}));
      history.push('/register-thanks');
    }
  } catch (error) {
    const errorMessage =
      'There was an error during the registration process. ' +
      'Please try again or contact us if you continue to have trouble creating an account.';

    dispatch(errorActions.updateErrors({ ...error.response, message: errorMessage }));
  }
};

// Register - Activate Account
export const activateAccount = (token, history) => async dispatch => {
  try {
    const res = await restRegisterActivate(token);

    if (!res.data.errmsg) {
      dispatch(errorActions.updateErrors({}));
      history.push('/register-thanks');
    }
  } catch (error) {
    const errorMessage =
      'There was an error during the activation process. The token in your email link may be expired, ' +
      'you can request a new activation email to be sent during your next login attempt.';

    dispatch(errorActions.updateErrors({ ...error.response, message: errorMessage }));
  }
};

// Login - Get User Token
export const loginUser = userData => async dispatch => {
  try {
    const res = await restLogin(userData);
    if (res.status === 200) {
      const { accessToken, refreshToken, user } = res.data;

      setAuthToken(refreshToken);
      dispatch(actions.updateRefreshToken(refreshToken));
      dispatch(actions.updateAccessToken(accessToken));

      dispatch(actions.updateUser(user));
      dispatch(errorActions.updateErrors({}));

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

    dispatch(errorActions.updateErrors({ ...data, message: errorMessage }));
  }
};

// Log user out
export const logoutUser = () => async dispatch => {
  try {
    const res = await restLogout();
    if (res.status === 200) {
      // Set current user to {} which will set isAuthenticated to false
      localStorage.removeItem('accessToken');
      localStorage.removeItem('refreshToken');
      dispatch(actions.updateAccessToken(initialState.accessToken));
      dispatch(actions.updateRefreshToken(initialState.refreshToken));
      dispatch(actions.updateUser(initialState.user));
    }
  } catch (error) {
    dispatch(errorActions.updateErrors(error.response.data));
  }
};
