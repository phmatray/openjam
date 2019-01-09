/* eslint-disable no-alert */

import { actions as errorActions } from './error';
import { logoutUser } from './auth';
import {
  restGetProfileMe,
  restGetProfileByHandle,
  restAddProfile,
  restGetUsers,
  restDeleteProfile,
} from '../../api/logion';

// Action Types
//
export const types = {
  LOAD: 'profile/LOAD',
  UPDATE_PROFILES: 'profile/UPDATE_PROFILES',
  UPDATE_PROFILE: 'profile/UPDATE_PROFILE',
  CLEAR_CURRENT_PROFILE: 'profile/CLEAR_CURRENT_PROFILE',
};

// Reducer
//
export const initialState = {
  profile: null,
  profiles: null,
  loading: false,
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case types.LOAD:
      return { ...state, loading: true };

    case types.UPDATE_PROFILES:
      return { ...state, profiles: action.payload, loading: false };

    case types.UPDATE_PROFILE:
      return { ...state, profile: action.payload, loading: false };

    case types.CLEAR_CURRENT_PROFILE:
      return { ...state, profile: null };

    default:
      return state;
  }
};

export default reducer;

// Selectors
//
export const getProfiles = state => state.profile.profiles;
export const getProfile = state => state.profile.profile;
export const getProfileHandle = state => state.profile.profile.handle;
export const getLoading = state => state.profile.loading;

// Action Creators
//
export const actions = {
  loadProfiles: () => ({ type: types.LOAD }),

  updateProfiles: payload => {
    const profiles = payload && payload.docs ? payload.docs : payload;
    return { type: types.UPDATE_PROFILES, payload: profiles };
  },

  updateProfile: payload => ({ type: types.UPDATE_PROFILE, payload }),
  clearCurrentProfile: () => ({ type: types.CLEAR_CURRENT_PROFILE }),
};

// Side effects, only as applicable (thunks)
//
// Get current profile
export const fetchCurrentProfile = () => async dispatch => {
  try {
    dispatch(actions.loadProfiles());
    const res = await restGetProfileMe();
    dispatch(actions.updateProfile(res.data));
  } catch (error) {
    dispatch(actions.updateProfile({}));
  }
};

// Get profile by handle
export const fetchProfileByHandle = handle => async dispatch => {
  try {
    dispatch(actions.loadProfiles());
    const res = await restGetProfileByHandle(handle);
    dispatch(actions.updateProfile(res.data));
  } catch (error) {
    dispatch(actions.updateProfile(null));
  }
};

// Create profile
export const createProfile = (profileData, history) => async dispatch => {
  try {
    await restAddProfile(profileData);
    history.push('/dashboard');
  } catch (error) {
    dispatch(errorActions.updateErrors(error.response.data));
  }
};

// Get all profiles
export const fetchProfiles = () => async dispatch => {
  try {
    dispatch(actions.loadProfiles());
    const res = await restGetUsers();
    dispatch(actions.updateProfiles(res.data.docs));
  } catch (error) {
    dispatch(actions.updateProfiles(null));
  }
};

// Delete account & profile
export const deleteAccount = () => async dispatch => {
  if (window.confirm('Are you sure? This can NOT be undone!')) {
    try {
      await restDeleteProfile();
      dispatch(logoutUser());
    } catch (error) {
      dispatch(errorActions.updateErrors(error.response.data));
    }
  }
};
