import axios from 'axios';

// Actions
//
const FETCH_TRACKS_PENDING = 'track/FETCH_TRACKS_PENDING';
const FETCH_TRACKS_SUCCESS = 'track/FETCH_TRACKS_SUCCESS';
const FETCH_TRACKS_ERROR = 'track/FETCH_TRACKS_ERROR';
const FETCH_TRACK_PENDING = 'track/FETCH_TRACK_PENDING';
const FETCH_TRACK_SUCCESS = 'track/FETCH_TRACK_SUCCESS';
const FETCH_TRACK_ERROR = 'track/FETCH_TRACK_ERROR';

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
    case FETCH_TRACKS_PENDING:
      return { ...state, loading: true };

    case FETCH_TRACKS_SUCCESS:
      return { ...state, tracks: action.payload.docs, loading: false };

    case FETCH_TRACKS_ERROR:
      return { ...state, error: action.payload, tracks: null, loading: false };

    case FETCH_TRACK_PENDING:
      return { ...state, loading: true };

    case FETCH_TRACK_SUCCESS:
      return { ...state, track: action.payload, loading: false };

    case FETCH_TRACK_ERROR:
      return { ...state, error: action.payload, track: initialState.track, loading: false };

    default:
      return state;
  }
};

export default reducer;

// Side effects, only as applicable (thunks)
//
// Fetch all tracks
export const fetchTracks = () => ({
  types: [FETCH_TRACKS_PENDING, FETCH_TRACKS_SUCCESS, FETCH_TRACKS_ERROR],
  callAPI: () => axios.get(`${process.env.REACT_APP_ENDPOINT}/track?%24embed=artists`),
  shouldCallAPI: () => true,
});

// Fetch a track by _id
export const fetchTrack = id => ({
  types: [FETCH_TRACK_PENDING, FETCH_TRACK_SUCCESS, FETCH_TRACK_ERROR],
  callAPI: () => axios.get(`${process.env.REACT_APP_ENDPOINT}/track/${id}`),
  shouldCallAPI: () => true,
});
