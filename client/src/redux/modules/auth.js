import axios from 'axios';
import setAuthToken from '../../utils/setAuthToken';
import jwt_decode from 'jwt-decode';
import { updateErrors } from './error';
import isEmpty from '../../validation/is-empty';

// Actions
//
const UPDATE_USER = 'auth/UPDATE_USER';

// Reducer
//
const initialState = {
  isAuthenticated: false,
  user: {},
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case UPDATE_USER:
      return {
        ...state,
        isAuthenticated: !isEmpty(action.payload),
        user: action.payload,
      };

    default:
      return state;
  }
}

// Action Creators
//
export function updateUser(payload) {
  return { type: UPDATE_USER, payload };
}

// Side effects, only as applicable (thunks)
//
// Register User
export function registerUser(userData, history) {
  return dispatch => {
    axios
      .post('/api/users/register', userData)
      .then(res => history.push('/login'))
      .catch(err => dispatch(updateErrors(err.response.data)));
  };
}

// Login - Get User Token
export function loginUser(userData) {
  return dispatch => {
    axios
      .post('/api/users/login', userData)
      .then(res => {
        // Save to localStorage
        const { token } = res.data;
        // Set token to ls
        localStorage.setItem('jwtToken', token);
        // Set token to Auth header
        setAuthToken(token);
        // Decode token to get user data
        const decoded = jwt_decode(token);
        // Set current user
        dispatch(updateUser(decoded));
      })
      .catch(err => dispatch(updateErrors(err.response.data)));
  };
}

// Log user out
export function logoutUser() {
  return dispatch => {
    // Remove token from local storage
    localStorage.removeItem('jwtToken');
    // Remove auth header for future requests
    setAuthToken(false);
    // Set current user to {} which will set isAuthenticated to false
    dispatch(updateUser({}));
  };
}
