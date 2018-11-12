import axios from 'axios';

// Actions
//
const FETCH_LABELS_PENDING = 'label/FETCH_LABELS_PENDING';
const FETCH_LABELS_SUCCESS = 'label/FETCH_LABELS_SUCCESS';
const FETCH_LABELS_ERROR = 'label/FETCH_LABELS_ERROR';
const FETCH_LABEL_PENDING = 'label/FETCH_LABEL_PENDING';
const FETCH_LABEL_SUCCESS = 'label/FETCH_LABEL_SUCCESS';
const FETCH_LABEL_ERROR = 'label/FETCH_LABEL_ERROR';

// Reducer
//
const initialState = {
  labels: null, // array
  label: null, // object
  loading: false, // bool
  error: null,
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case FETCH_LABELS_PENDING:
      return { ...state, loading: true };

    case FETCH_LABELS_SUCCESS:
      return { ...state, labels: action.payload, loading: false };

    case FETCH_LABELS_ERROR:
      return { ...state, error: action.payload, labels: null, loading: false };

    case FETCH_LABEL_PENDING:
      return { ...state, loading: true };

    case FETCH_LABEL_SUCCESS:
      return { ...state, label: action.payload, loading: false };

    case FETCH_LABEL_ERROR:
      return { ...state, error: action.payload, label: initialState.label, loading: false };

    default:
      return state;
  }
};

export default reducer;

// Side effects, only as applicable (thunks)
//
// Fetch all labels
export const fetchLabels = () => ({
  types: [FETCH_LABELS_PENDING, FETCH_LABELS_SUCCESS, FETCH_LABELS_ERROR],
  callAPI: () => axios.get(`${process.env.REACT_APP_ENDPOINT}/labels`),
  shouldCallAPI: () => true,
});

// Fetch a label by _id
export const fetchLabel = id => ({
  types: [FETCH_LABEL_PENDING, FETCH_LABEL_SUCCESS, FETCH_LABEL_ERROR],
  callAPI: () => axios.get(`${process.env.REACT_APP_ENDPOINT}/labels/${id}`),
  shouldCallAPI: () => true,
});
