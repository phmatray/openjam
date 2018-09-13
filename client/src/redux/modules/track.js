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
  tracks: null,
  track: {},
  loading: false,
  error: null,
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case FETCH_TRACKS_PENDING:
      return {
        ...state,
        loading: true,
      };

    case FETCH_TRACKS_SUCCESS:
      return {
        ...state,
        tracks: action.payload,
        loading: false,
      };

    case FETCH_TRACKS_ERROR:
      return {
        ...state,
        error: action.payload,
        tracks: null,
        loading: false,
      };

    case FETCH_TRACK_PENDING:
      return {
        ...state,
        loading: true,
      };

    case FETCH_TRACK_SUCCESS:
      return {
        ...state,
        track: action.payload,
        loading: false,
      };

    case FETCH_TRACK_ERROR:
      return {
        ...state,
        error: action.payload,
        track: {},
        loading: false,
      };

    default:
      return state;
  }
}

// Side effects, only as applicable (thunks)
//
// Fetch all tracks
export function fetchTracks() {
  return {
    types: [FETCH_TRACKS_PENDING, FETCH_TRACKS_SUCCESS, FETCH_TRACKS_ERROR],
    callAPI: () => axios.get('/api/tracks'),
    shouldCallAPI: state => true,
  };
}

// Fetch a track by _id
export function fetchTrack(id) {
  return {
    types: [FETCH_TRACK_PENDING, FETCH_TRACK_SUCCESS, FETCH_TRACK_ERROR],
    callAPI: () => axios.get(`/api/tracks/${id}`),
    shouldCallAPI: state => true,
  };
}
