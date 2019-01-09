import { restGetLabels, restGetLabel } from '../../../api/logion';

// Action Types
//
export const types = {
  FETCH_LABELS_PENDING: 'label/FETCH_LABELS_PENDING',
  FETCH_LABELS_SUCCESS: 'label/FETCH_LABELS_SUCCESS',
  FETCH_LABELS_ERROR: 'label/FETCH_LABELS_ERROR',
  FETCH_LABEL_PENDING: 'label/FETCH_LABEL_PENDING',
  FETCH_LABEL_SUCCESS: 'label/FETCH_LABEL_SUCCESS',
  FETCH_LABEL_ERROR: 'label/FETCH_LABEL_ERROR',
};

// Reducer
//
export const initialState = {
  labels: null, // array
  label: null, // object
  loading: false, // bool
  error: null,
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case types.FETCH_LABELS_PENDING:
      return { ...state, loading: true };

    case types.FETCH_LABELS_SUCCESS:
      return { ...state, labels: action.payload.docs, loading: false };

    case types.FETCH_LABELS_ERROR:
      return { ...state, error: action.payload, labels: null, loading: false };

    case types.FETCH_LABEL_PENDING:
      return { ...state, loading: true };

    case types.FETCH_LABEL_SUCCESS:
      return { ...state, label: action.payload, loading: false };

    case types.FETCH_LABEL_ERROR:
      return { ...state, error: action.payload, label: initialState.label, loading: false };

    default:
      return state;
  }
};

export default reducer;

// Selectors
//
export const getLabels = state => state.data.label.labels;
export const getLabel = state => state.data.label.label;
export const getLoading = state => state.data.label.loading;
export const getError = state => state.data.label.error;

// Side effects, only as applicable (thunks)
//
// Fetch all labels
export const fetchLabels = () => ({
  types: [types.FETCH_LABELS_PENDING, types.FETCH_LABELS_SUCCESS, types.FETCH_LABELS_ERROR],
  callAPI: () => restGetLabels(),
  shouldCallAPI: () => true,
});

// Fetch a label by _id
export const fetchLabel = id => ({
  types: [types.FETCH_LABEL_PENDING, types.FETCH_LABEL_SUCCESS, types.FETCH_LABEL_ERROR],
  callAPI: () => restGetLabel(id),
  shouldCallAPI: () => true,
});
