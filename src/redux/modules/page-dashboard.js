import { restGetUser } from '../logion';

// Actions
//
const LOAD = 'dashboard/LOAD';
const UPDATE_USER = 'dashboard/UPDATE_USER';

// Reducer
//
const initialState = {
  user: {},
  loading: false,
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case LOAD:
      return { ...state, loading: true };

    case UPDATE_USER:
      return { ...state, user: action.payload, loading: false };

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
// Get User
export const getUser = id => async dispatch => {
  try {
    dispatch(loadUser());
    const res = await restGetUser(id);
    dispatch(updateUser(res.data));
  } catch (error) {
    dispatch(updateUser(initialState.user));
  }
};

export const getMe = () => async (dispatch, getState) => {
  try {
    dispatch(loadUser());
    const myId = getState().auth.user._id;
    console.warn(myId);
    const res = await restGetUser(myId);
    dispatch(updateUser(res.data));
  } catch (error) {
    dispatch(updateUser(initialState.user));
  }
};
