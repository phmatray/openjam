import axios from 'axios';

// Actions
//
const FETCH_TRACK_PENDING = 'explore/FETCH_TRACK_PENDING';
const FETCH_TRACK_SUCCESS = 'explore/FETCH_TRACK_SUCCESS';
const FETCH_TRACK_ERROR = 'explore/FETCH_TRACK_ERROR';
const BY_ARTIST_PENDING = 'explore/BY_ARTIST_PENDING';
const BY_ARTIST_SUCCESS = 'explore/BY_ARTIST_SUCCESS';
const BY_ARTIST_ERROR = 'explore/BY_ARTIST_ERROR';

// Reducer
//
const initialState = {
  track: null, // object
  trackLoading: false, // bool
  trackError: null,
  byArtist: [],
  byArtistLoading: false,
  byArtistError: null,
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case FETCH_TRACK_PENDING:
      return { ...state, trackLoading: true };

    case FETCH_TRACK_SUCCESS:
      return { ...state, track: action.payload, trackLoading: false };

    case FETCH_TRACK_ERROR:
      return {
        ...state,
        trackError: action.payload,
        track: initialState.track,
        trackLoading: false,
      };

    case BY_ARTIST_PENDING:
      return { ...state, byArtistLoading: true };

    case BY_ARTIST_SUCCESS:
      return { ...state, byArtist: action.payload, byArtistLoading: false };

    case BY_ARTIST_ERROR:
      return {
        ...state,
        byArtistError: action.payload,
        byArtist: initialState.byArtist,
        byArtistLoading: false,
      };

    default:
      return state;
  }
};

export default reducer;

// Side effects, only as applicable (thunks)
//
// Fetch a track by _id
export const fetchTrack = id => ({
  types: [FETCH_TRACK_PENDING, FETCH_TRACK_SUCCESS, FETCH_TRACK_ERROR],
  callAPI: () => axios.get(`${process.env.REACT_APP_ENDPOINT}/tracks/${id}`),
  shouldCallAPI: () => true,
});

export const fetchTracksByArtistId = (artistId, limit = 3) => ({
  types: [BY_ARTIST_PENDING, BY_ARTIST_SUCCESS, BY_ARTIST_ERROR],
  callAPI: () => axios.get(`${process.env.REACT_APP_ENDPOINT}/tracks/artist/${artistId}/${limit}`),
  shouldCallAPI: () => true,
});
