import axios from 'axios';

// Actions
//
const FETCH_ARTISTS_PENDING = 'artist/FETCH_ARTISTS_PENDING';
const FETCH_ARTISTS_SUCCESS = 'artist/FETCH_ARTISTS_SUCCESS';
const FETCH_ARTISTS_ERROR = 'artist/FETCH_ARTISTS_ERROR';
const FETCH_ARTIST_PENDING = 'artist/FETCH_ARTIST_PENDING';
const FETCH_ARTIST_SUCCESS = 'artist/FETCH_ARTIST_SUCCESS';
const FETCH_ARTIST_ERROR = 'artist/FETCH_ARTIST_ERROR';

// Reducer
//
const initialState = {
  artists: null, // array
  artist: null, // object
  loading: false, // bool
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

    case FETCH_ARTIST_PENDING:
      return {
        ...state,
        loading: true,
      };

    case FETCH_ARTIST_SUCCESS:
      return {
        ...state,
        artist: action.payload,
        loading: false,
      };

    case FETCH_ARTIST_ERROR:
      return {
        ...state,
        error: action.payload,
        artist: initialState.artist,
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
    callAPI: () => axios.get('https://api.openjam.eu/api/artists'),
    shouldCallAPI: () => true,
  };
}

// Fetch a artist by _id
export function fetchArtist(id) {
  return {
    types: [FETCH_ARTIST_PENDING, FETCH_ARTIST_SUCCESS, FETCH_ARTIST_ERROR],
    callAPI: () => axios.get(`https://api.openjam.eu/api/artists/${id}`),
    shouldCallAPI: () => true,
  };
}
