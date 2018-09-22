import axios from 'axios';

// Actions
//
const FETCH_ALBUMS_PENDING = 'album/FETCH_ALBUMS_PENDING';
const FETCH_ALBUMS_SUCCESS = 'album/FETCH_ALBUMS_SUCCESS';
const FETCH_ALBUMS_ERROR = 'album/FETCH_ALBUMS_ERROR';

// Reducer
//
const initialState = {
  albums: null,
  loading: false,
  error: null,
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case FETCH_ALBUMS_PENDING:
      return {
        ...state,
        loading: true,
      };

    case FETCH_ALBUMS_SUCCESS:
      return {
        ...state,
        albums: action.payload,
        loading: false,
      };

    case FETCH_ALBUMS_ERROR:
      return {
        ...state,
        error: action.payload,
        albums: null,
        loading: false,
      };

    default:
      return state;
  }
}

// Side effects, only as applicable (thunks)
//
// Fetch all albums
export function fetchAlbums() {
  return {
    types: [FETCH_ALBUMS_PENDING, FETCH_ALBUMS_SUCCESS, FETCH_ALBUMS_ERROR],
    callAPI: () => axios.get('/api/albums'),
    shouldCallAPI: state => true,
  };
}
