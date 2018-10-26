import axios from 'axios';
import { updateErrors } from './error';
import { logoutUser } from './auth';

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

export default function reducer(state = initialState, action = {}) {
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
}

// Action Creators
//
export function loadProfiles() {
  return { type: LOAD };
}

export function updateProfiles(payload) {
  return { type: UPDATE_PROFILES, payload };
}

export function updateProfile(payload) {
  return { type: UPDATE_PROFILE, payload };
}

export function clearCurrentProfile() {
  return { type: CLEAR_CURRENT_PROFILE };
}

// Side effects, only as applicable (thunks)
//
// Get current profile
export function getCurrentProfile() {
  return dispatch => {
    dispatch(loadProfiles());
    axios
      .get('https://api.openjam.eu/api/profile')
      .then(res => dispatch(updateProfile(res.data)))
      .catch(err => dispatch(updateProfile({})));
  };
}

// Get profile by handle
export function getProfileByHandle(handle) {
  return dispatch => {
    dispatch(loadProfiles());
    axios
      .get(`https://api.openjam.eu/api/profile/handle/${handle}`)
      .then(res => dispatch(updateProfile(res.data)))
      .catch(err => dispatch(updateProfile(null)));
  };
}

// Create profile
export function createProfile(profileData, history) {
  return dispatch => {
    axios
      .post('https://api.openjam.eu/api/profile', profileData)
      .then(res => history.push('/dashboard'))
      .catch(err => dispatch(updateErrors(err.response.data)));
  };
}

// Add experience
export function addExperience(expData, history) {
  return dispatch => {
    axios
      .post('https://api.openjam.eu/api/profile/experience', expData)
      .then(res => history.push('/dashboard'))
      .catch(err => dispatch(updateErrors(err.response.data)));
  };
}

// Add education
export function addEducation(eduData, history) {
  return dispatch => {
    axios
      .post('https://api.openjam.eu/api/profile/education', eduData)
      .then(res => history.push('/dashboard'))
      .catch(err => dispatch(updateErrors(err.response.data)));
  };
}

// Delete experience
export function deleteExperience(id) {
  return dispatch => {
    axios
      .delete(`https://api.openjam.eu/api/profile/experience/${id}`)
      .then(res => dispatch(updateProfile(res.data)))
      .catch(err => dispatch(updateErrors(err.response.data)));
  };
}

// Delete education
export function deleteEducation(id) {
  return dispatch => {
    axios
      .delete(`https://api.openjam.eu/api/profile/education/${id}`)
      .then(res => dispatch(updateProfile(res.data)))
      .catch(err => dispatch(updateErrors(err.response.data)));
  };
}

// Get all profiles
export function getProfiles() {
  return dispatch => {
    dispatch(loadProfiles());
    axios
      .get('https://api.openjam.eu/api/profile/all')
      .then(res => dispatch(updateProfiles(res.data)))
      .catch(err => dispatch(updateProfiles(null)));
  };
}

// Delete account & profile
export function deleteAccount() {
  return dispatch => {
    if (window.confirm('Are you sure? This can NOT be undone!')) {
      axios
        .delete('https://api.openjam.eu/api/profile')
        .then(res => dispatch(logoutUser()))
        .catch(err => dispatch(updateErrors(err.response.data)));
    }
  };
}
