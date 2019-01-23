// @flow

import { restGetUser } from 'api/logion';

// Action Types
//
export const types = {
  LOAD: 'dashboard/LOAD',
  UPDATE_USER: 'dashboard/UPDATE_USER',
};

// Reducer
//
export const initialState = {
  user: {},
  loading: false,
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case types.LOAD:
      return { ...state, loading: true };

    case types.UPDATE_USER:
      return { ...state, user: action.payload, loading: false };

    default:
      return state;
  }
};

export default reducer;

// Selectors
//
export const getUser = state => state.ui.views.dashboard.user;
export const getLoading = state => state.ui.views.dashboard.loading;

// Action Creators
//
export const actions = {
  loadUser: () => ({ type: types.LOAD }),
  updateUser: payload => ({ type: types.UPDATE_USER, payload }),
};

// Side effects, only as applicable (thunks)
//
// Get User
export const fetchUser = id => async dispatch => {
  try {
    dispatch(actions.loadUser());
    const res = await restGetUser(id);
    dispatch(actions.updateUser(res.data));
  } catch (error) {
    dispatch(actions.updateUser(initialState.user));
  }
};

export const fetchMe = () => async (dispatch, getState) => {
  try {
    dispatch(actions.loadUser());
    const myId = getState().auth.user._id;
    const res = await restGetUser(myId);
    dispatch(actions.updateUser(res.data));
  } catch (error) {
    dispatch(actions.updateUser(initialState.user));
  }
};
