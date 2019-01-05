// Actions
//
export const types = {
  UPDATE: 'error/UPDATE',
  CLEAR: 'error/CLEAR',
};

// Reducer
//
export const initialState = {};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case types.UPDATE:
      return action.payload;

    case types.CLEAR:
      return {};

    default:
      return state;
  }
};

export default reducer;

// Action Creators
//
export const actions = {
  updateErrors: payload => ({ type: types.UPDATE, payload }),
  clearErrors: () => ({ type: types.CLEAR }),
};
