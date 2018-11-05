// Actions
//
const UPDATE = 'error/UPDATE';
const CLEAR = 'error/CLEAR';

// Reducer
//
const initialState = {};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case UPDATE:
      return action.payload;

    case CLEAR:
      return {};

    default:
      return state;
  }
};

export default reducer;

// Action Creators
//
export const updateErrors = payload => ({ type: UPDATE, payload });
export const clearErrors = () => ({ type: CLEAR });
