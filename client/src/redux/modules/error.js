// Actions
//
const UPDATE = 'error/UPDATE';
const CLEAR = 'error/CLEAR';

// Reducer
//
const initialState = {};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case UPDATE:
      return action.payload;

    case CLEAR:
      return {};

    default:
      return state;
  }
}

// Action Creators
//
export function updateErrors(payload) {
  return { type: UPDATE, payload };
}

export function clearErrors() {
  return { type: CLEAR };
}
