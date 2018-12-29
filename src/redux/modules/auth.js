import _ from 'lodash';
import axios from 'axios';
import jwtDecode from 'jwt-decode';

import { updateErrors } from './error';
import isEmpty from '../../utils/validation/is-empty';
import setAuthToken from '../../utils/setAuthToken';
import { USER_ROLES } from '../../config';

// Actions
//
const LOAD = 'auth/LOAD';
const UPDATE_USER = 'auth/UPDATE_USER';
const UPDATE_ACCESS_TOKEN = 'auth/UPDATE_ACCESS_TOKEN';
const UPDATE_REFRESH_TOKEN = 'auth/UPDATE_REFRESH_TOKEN';

// Reducer
//
const initialState = {
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
    case LOAD:
      return {
        ...state,
        loading: true,
      };

    case UPDATE_USER:
      return {
        ...state,
        isAuthenticated: !isEmpty(action.payload),
        user: action.payload,
        loading: false,
      };

    case UPDATE_ACCESS_TOKEN:
      return {
        ...state,
        scope: action.payload.scope,
        exp: action.payload.exp,
        iat: action.payload.iat,
        accessToken: action.payload.accessToken,
      };

    case UPDATE_REFRESH_TOKEN:
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
export const loadUser = () => ({ type: LOAD });

export const updateUser = payload => ({ type: UPDATE_USER, payload });

export const updateAccessToken = accessToken => {
  const payload =
    accessToken === initialState.accessToken
      ? _.pick(initialState, ['accessToken', 'scope', 'exp', 'iat'])
      : { accessToken, ..._.pick(jwtDecode(accessToken), ['scope', 'exp', 'iat']) };

  return { type: UPDATE_ACCESS_TOKEN, payload };
};

export const updateRefreshToken = refreshToken => ({ type: UPDATE_REFRESH_TOKEN, refreshToken });

// Side effects, only as applicable (thunks)
//
// Register User
export const registerUser = (userData, history) => async dispatch => {
  try {
    const user = { ...userData, role: USER_ROLES.USER };
    delete user.password2;

    const res = await axios.post(`${process.env.REACT_APP_ENDPOINT}/register`, {
      user,
      registerType: 'Register',
    });

    if (!res.data.errmsg) {
      dispatch(updateErrors({}));
      history.push('/register-thanks');
    }
  } catch (error) {
    const errorMessage =
      'There was an error during the registration process. ' +
      'Please try again or contact us if you continue to have trouble creating an account.';

    dispatch(updateErrors({ ...error.response, message: errorMessage }));
  }
};

// Register - Activate Account
export const activateAccount = (token, history) => async dispatch => {
  try {
    const res = await axios.post(`${process.env.REACT_APP_ENDPOINT}/register/activate`, { token });

    if (!res.data.errmsg) {
      dispatch(updateErrors({}));
      history.push('/register-thanks');
    }
  } catch (error) {
    const errorMessage =
      'There was an error during the activation process. The token in your email link may be expired, ' +
      'you can request a new activation email to be sent during your next login attempt.';

    dispatch(updateErrors({ ...error.response, message: errorMessage }));
  }
};

// Login - Get User Token
export const loginUser = userData => async dispatch => {
  try {
    const res = await axios.post(`${process.env.REACT_APP_ENDPOINT}/login`, userData);
    if (res.status === 200) {
      const { accessToken, refreshToken, user } = res.data;

      setAuthToken(refreshToken);
      dispatch(updateRefreshToken(refreshToken));

      localStorage.setItem('accessToken', accessToken);
      localStorage.setItem('refreshToken', refreshToken);
      dispatch(updateAccessToken(accessToken));
      dispatch(updateUser(user));
      dispatch(updateErrors({}));
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

    dispatch(updateErrors({ ...data, message: errorMessage }));
  }
};

// Log user out
export const logoutUser = () => async dispatch => {
  try {
    const res = await axios.delete(`${process.env.REACT_APP_ENDPOINT}/logout`, {});
    if (res.status === 200) {
      // Set current user to {} which will set isAuthenticated to false
      localStorage.removeItem('accessToken');
      localStorage.removeItem('refreshToken');
      dispatch(updateAccessToken(initialState.accessToken));
      dispatch(updateRefreshToken(initialState.refreshToken));
      dispatch(updateUser(initialState.user));
    }
  } catch (error) {
    dispatch(updateErrors(error.response.data));
  }
};

// export const updateTokens = () => dispatch => {
//   axios.defaults.headers.common.Authorization = `Bearer ${accessToken}`;
// };
