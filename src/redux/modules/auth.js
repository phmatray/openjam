import axios from 'axios';
import { updateErrors } from './error';
import isEmpty from '../../utils/validation/is-empty';

// Actions
//
const LOAD = 'auth/LOAD';
const UPDATE_USER = 'auth/UPDATE_USER';

// Reducer
//
const initialState = {
  isAuthenticated: false,
  user: {},
  loading: false,
};

export default function reducer(state = initialState, action = {}) {
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

    default:
      return state;
  }
}

// Action Creators
//
export function loadUser() {
  return { type: LOAD };
}

export function updateUser(payload) {
  return { type: UPDATE_USER, payload };
}

// Side effects, only as applicable (thunks)
//
// Get current user
export function getCurrentUser() {
  return dispatch => {
    dispatch(loadUser());
    axios
      .get('https://api.openjam.eu/auth/user')
      .then(res => dispatch(updateUser(res.data)))
      .catch(err => dispatch(updateUser({})));
  };
}

// Register User
export function registerUser(userData, history) {
  return dispatch => {
    axios
      .post('https://api.openjam.eu/auth/register', userData)
      .then(res => {
        console.log(res);
        if (!res.data.errmsg) {
          console.log("you're good");
          // this.setState({
          //   redirectTo: '/login',
          // });
        } else {
          console.log('duplicate');
        }

        history.push('/login');
      })
      .catch(err => dispatch(updateErrors(err.response.data)));
  };
}

// Login - Get User Token
export function loginUser(userData) {
  return dispatch => {
    axios
      .post('https://api.openjam.eu/auth/login', userData)
      .then(res => {
        if (res.status === 200) {
          dispatch(updateUser(res.data));
        }
      })
      .catch(err => dispatch(updateErrors(err.response.data)));
  };
}

// Log user out
export function logoutUser() {
  return dispatch => {
    axios
      .post('https://api.openjam.eu/auth/logout')
      .then(res => {
        console.log(res.data);

        if (res.status === 200) {
          // Set current user to {} which will set isAuthenticated to false
          dispatch(updateUser({}));
        }
      })
      .catch(err => dispatch(updateErrors(err.response.data)));
  };
}
