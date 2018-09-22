import axios from 'axios';

// Actions
//
const FETCH_LABELS_PENDING = 'label/FETCH_LABELS_PENDING';
const FETCH_LABELS_SUCCESS = 'label/FETCH_LABELS_SUCCESS';
const FETCH_LABELS_ERROR = 'label/FETCH_LABELS_ERROR';

// Reducer
//
const initialState = {
  labels: null,
  loading: false,
  error: null,
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case FETCH_LABELS_PENDING:
      return {
        ...state,
        loading: true,
      };

    case FETCH_LABELS_SUCCESS:
      return {
        ...state,
        labels: action.payload,
        loading: false,
      };

    case FETCH_LABELS_ERROR:
      return {
        ...state,
        error: action.payload,
        labels: null,
        loading: false,
      };

    default:
      return state;
  }
}

// Side effects, only as applicable (thunks)
//
// Fetch all labels
export function fetchLabels() {
  return {
    types: [FETCH_LABELS_PENDING, FETCH_LABELS_SUCCESS, FETCH_LABELS_ERROR],
    callAPI: () => axios.get('/api/labels'),
    shouldCallAPI: state => true,
  };
}
