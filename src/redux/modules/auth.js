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

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case LOAD:
      return { ...state, loading: true };

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
};

export default reducer;

// Action Creators
//
export const loadUser = () => ({ type: LOAD });
export const updateUser = payload => ({ type: UPDATE_USER, payload });

// Side effects, only as applicable (thunks)
//
// Get current user
export const getCurrentUser = () => dispatch => {
  dispatch(loadUser());
  axios
    .get(`${process.env.REACT_APP_ENDPOINT}/auth/user`)
    .then(res => dispatch(updateUser(res.data)))
    .catch(() => dispatch(updateUser({})));
};

// Register User
export const registerUser = (userData, history) => dispatch => {
  axios
    .post(`${process.env.REACT_APP_ENDPOINT}/auth/register`, userData)
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

// Login - Get User Token
export const loginUser = userData => dispatch => {
  axios
    .post(`${process.env.REACT_APP_ENDPOINT}/auth/login`, userData)
    .then(res => {
      console.log(res);
      if (res.status === 200) {
        dispatch(updateUser(res.data));
      }
    })
    .catch(err => {
      console.warn(err.response.data);
      dispatch(updateErrors(err.response.data));
    });
};

// Log user out
export const logoutUser = () => dispatch => {
  axios
    .post(`${process.env.REACT_APP_ENDPOINT}/auth/logout`)
    .then(res => {
      console.log(res.data);

      if (res.status === 200) {
        // Set current user to {} which will set isAuthenticated to false
        dispatch(updateUser({}));
      }
    })
    .catch(err => dispatch(updateErrors(err.response.data)));
};
