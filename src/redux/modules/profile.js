/* eslint-disable no-alert */

import { updateErrors } from './error';
import { logoutUser } from './auth';
import {
  restGetProfileMe,
  restGetProfileByHandle,
  restAddProfile,
  restGetUsers,
  restDeleteProfile,
} from '../logion';

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
      return { ...state, loading: true };

    case UPDATE_PROFILES:
      return { ...state, profiles: action.payload, loading: false };

    case UPDATE_PROFILE:
      return { ...state, profile: action.payload, loading: false };

    case CLEAR_CURRENT_PROFILE:
      return { ...state, profile: null };

    default:
      return state;
  }
};

export default reducer;

// Action Creators
//
export const loadProfiles = () => ({ type: LOAD });

export const updateProfiles = payload => {
  const profiles = payload && payload.docs ? payload.docs : payload;
  return { type: UPDATE_PROFILES, payload: profiles };
};

export const updateProfile = payload => ({ type: UPDATE_PROFILE, payload });
export const clearCurrentProfile = () => ({ type: CLEAR_CURRENT_PROFILE });

// Side effects, only as applicable (thunks)
//
// Get current profile
export const getCurrentProfile = () => async dispatch => {
  try {
    dispatch(loadProfiles());
    const res = await restGetProfileMe();
    dispatch(updateProfile(res.data));
  } catch (error) {
    dispatch(updateProfile({}));
  }
};

// Get profile by handle
export const getProfileByHandle = handle => async dispatch => {
  try {
    dispatch(loadProfiles());
    const res = await restGetProfileByHandle(handle);
    dispatch(updateProfile(res.data));
  } catch (error) {
    dispatch(updateProfile(null));
  }
};

// Create profile
export const createProfile = (profileData, history) => async dispatch => {
  try {
    await restAddProfile(profileData);
    history.push('/dashboard');
  } catch (error) {
    dispatch(updateErrors(error.response.data));
  }
};

// Get all profiles
export const getProfiles = () => async dispatch => {
  try {
    dispatch(loadProfiles());
    const res = await restGetUsers();
    dispatch(updateProfiles(res.data.docs));
  } catch (error) {
    dispatch(updateProfiles(null));
  }
};

// Delete account & profile
export const deleteAccount = () => async dispatch => {
  if (window.confirm('Are you sure? This can NOT be undone!')) {
    try {
      await restDeleteProfile();
      dispatch(logoutUser());
    } catch (error) {
      dispatch(updateErrors(error.response.data));
    }
  }
};
