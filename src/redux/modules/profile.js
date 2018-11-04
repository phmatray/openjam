/* eslint-disable no-alert */

import axios from 'axios';
import { updateErrors } from './error';
import { logoutUser } from './auth';
import { apiBase } from '../constants';

// Actions
//
const LOAD = 'profile/LOAD';
const UPDATE_PROFILES = 'profile/UPDATE_PROFILES';
const UPDATE_PROFILE = 'profile/UPDATE_PROFILE';
const CLEAR_CURRENT_PROFILE = 'profile/CLEAR_CURRENT_PROFILE';

// Reducer
//
const initialState = {
  profile: null,
  profiles: null,
  loading: false,
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case LOAD:
      return {
        ...state,
        loading: true,
      };

    case UPDATE_PROFILES:
      return {
        ...state,
        profiles: action.payload,
        loading: false,
      };

    case UPDATE_PROFILE:
      return {
        ...state,
        profile: action.payload,
        loading: false,
      };

    case CLEAR_CURRENT_PROFILE:
      return {
        ...state,
        profile: null,
      };

    default:
      return state;
  }
};

export default reducer;

// Action Creators
//
export const loadProfiles = () => ({ type: LOAD });
export const updateProfiles = payload => ({ type: UPDATE_PROFILES, payload });
export const updateProfile = payload => ({ type: UPDATE_PROFILE, payload });
export const clearCurrentProfile = () => ({ type: CLEAR_CURRENT_PROFILE });

// Side effects, only as applicable (thunks)
//
// Get current profile
export const getCurrentProfile = () => dispatch => {
  dispatch(loadProfiles());
  axios
    .get(`${apiBase}/api/profile`)
    .then(res => dispatch(updateProfile(res.data)))
    .catch(() => dispatch(updateProfile({})));
};

// Get profile by handle
export const getProfileByHandle = handle => dispatch => {
  dispatch(loadProfiles());
  axios
    .get(`${apiBase}/api/profile/handle/${handle}`)
    .then(res => dispatch(updateProfile(res.data)))
    .catch(() => dispatch(updateProfile(null)));
};

// Create profile
export const createProfile = (profileData, history) => dispatch => {
  axios
    .post(`${apiBase}/api/profile`, profileData)
    .then(() => history.push('/dashboard'))
    .catch(err => dispatch(updateErrors(err.response.data)));
};

// Add experience
export const addExperience = (expData, history) => dispatch => {
  axios
    .post(`${apiBase}/api/profile/experience`, expData)
    .then(() => history.push('/dashboard'))
    .catch(err => dispatch(updateErrors(err.response.data)));
};

// Add education
export const addEducation = (eduData, history) => dispatch => {
  axios
    .post(`${apiBase}/api/profile/education`, eduData)
    .then(() => history.push('/dashboard'))
    .catch(err => dispatch(updateErrors(err.response.data)));
};

// Delete experience
export const deleteExperience = id => dispatch => {
  axios
    .delete(`${apiBase}/api/profile/experience/${id}`)
    .then(res => dispatch(updateProfile(res.data)))
    .catch(err => dispatch(updateErrors(err.response.data)));
};

// Delete education
export const deleteEducation = id => dispatch => {
  axios
    .delete(`${apiBase}/api/profile/education/${id}`)
    .then(res => dispatch(updateProfile(res.data)))
    .catch(err => dispatch(updateErrors(err.response.data)));
};

// Get all profiles
export const getProfiles = () => dispatch => {
  dispatch(loadProfiles());
  axios
    .get(`${apiBase}/api/profile/all`)
    .then(res => dispatch(updateProfiles(res.data)))
    .catch(() => dispatch(updateProfiles(null)));
};

// Delete account & profile
export const deleteAccount = () => dispatch => {
  if (window.confirm('Are you sure? This can NOT be undone!')) {
    axios
      .delete(`${apiBase}/api/profile`)
      .then(() => dispatch(logoutUser()))
      .catch(err => dispatch(updateErrors(err.response.data)));
  }
};
