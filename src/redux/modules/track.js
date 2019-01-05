import { restGetTracks, restGetTrack } from '../../services/logionApi';

// Action Types
//
export const types = {
  FETCH_TRACKS_PENDING: 'track/FETCH_TRACKS_PENDING',
  FETCH_TRACKS_SUCCESS: 'track/FETCH_TRACKS_SUCCESS',
  FETCH_TRACKS_ERROR: 'track/FETCH_TRACKS_ERROR',
  FETCH_TRACK_PENDING: 'track/FETCH_TRACK_PENDING',
  FETCH_TRACK_SUCCESS: 'track/FETCH_TRACK_SUCCESS',
  FETCH_TRACK_ERROR: 'track/FETCH_TRACK_ERROR',
};

// Reducer
//
const initialState = {
  tracks: null, // array
  track: null, // object
  loading: false, // bool
  error: null,
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case types.FETCH_TRACKS_PENDING:
      return { ...state, loading: true };

    case types.FETCH_TRACKS_SUCCESS:
      return { ...state, tracks: action.payload.docs, loading: false };

    case types.FETCH_TRACKS_ERROR:
      return { ...state, error: action.payload, tracks: null, loading: false };

    case types.FETCH_TRACK_PENDING:
      return { ...state, loading: true };

    case types.FETCH_TRACK_SUCCESS:
      return { ...state, track: action.payload, loading: false };

    case types.FETCH_TRACK_ERROR:
      return { ...state, error: action.payload, track: initialState.track, loading: false };

    default:
      return state;
  }
};

export default reducer;

// Selectors
//
export const getTracks = state => state.track.tracks;
export const getTrack = state => state.track.track;
export const getLoading = state => state.track.loading;
export const getError = state => state.track.error;

// Side effects, only as applicable (thunks)
//
// Fetch all tracks
export const fetchTracks = () => ({
  types: [types.FETCH_TRACKS_PENDING, types.FETCH_TRACKS_SUCCESS, types.FETCH_TRACKS_ERROR],
  callAPI: () => restGetTracks(),
  shouldCallAPI: () => true,
});

// Fetch a track by _id
export const fetchTrack = id => ({
  types: [types.FETCH_TRACK_PENDING, types.FETCH_TRACK_SUCCESS, types.FETCH_TRACK_ERROR],
  callAPI: () => restGetTrack(id),
  shouldCallAPI: () => true,
});
