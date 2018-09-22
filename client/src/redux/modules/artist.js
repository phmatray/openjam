import axios from 'axios';

// Actions
//
const FETCH_ARTISTS_PENDING = 'artist/FETCH_ARTISTS_PENDING';
const FETCH_ARTISTS_SUCCESS = 'artist/FETCH_ARTISTS_SUCCESS';
const FETCH_ARTISTS_ERROR = 'artist/FETCH_ARTISTS_ERROR';

// Reducer
//
const initialState = {
  artists: null,
  loading: false,
  error: null,
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case FETCH_ARTISTS_PENDING:
      return {
        ...state,
        loading: true,
      };

    case FETCH_ARTISTS_SUCCESS:
      return {
        ...state,
        artists: action.payload,
        loading: false,
      };

    case FETCH_ARTISTS_ERROR:
      return {
        ...state,
        error: action.payload,
        artists: null,
        loading: false,
      };

    default:
      return state;
  }
}

// Side effects, only as applicable (thunks)
//
// Fetch all artists
export function fetchArtists() {
  return {
    types: [FETCH_ARTISTS_PENDING, FETCH_ARTISTS_SUCCESS, FETCH_ARTISTS_ERROR],
    callAPI: () => axios.get('/api/artists'),
    shouldCallAPI: state => true,
  };
}
