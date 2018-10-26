import axios from 'axios';

// Actions
//
const FETCH_ALBUMS_PENDING = 'album/FETCH_ALBUMS_PENDING';
const FETCH_ALBUMS_SUCCESS = 'album/FETCH_ALBUMS_SUCCESS';
const FETCH_ALBUMS_ERROR = 'album/FETCH_ALBUMS_ERROR';
const FETCH_ALBUM_PENDING = 'album/FETCH_ALBUM_PENDING';
const FETCH_ALBUM_SUCCESS = 'album/FETCH_ALBUM_SUCCESS';
const FETCH_ALBUM_ERROR = 'album/FETCH_ALBUM_ERROR';

// Reducer
//
const initialState = {
  albums: null, // array
  album: null, // object
  loading: false, // bool
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

    case FETCH_ALBUM_PENDING:
      return {
        ...state,
        loading: true,
      };

    case FETCH_ALBUM_SUCCESS:
      return {
        ...state,
        album: action.payload,
        loading: false,
      };

    case FETCH_ALBUM_ERROR:
      return {
        ...state,
        error: action.payload,
        album: initialState.album,
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
    callAPI: () => axios.get('https://api.openjam.eu/api/albums'),
    shouldCallAPI: state => true,
  };
}

// Fetch a album by _id
export function fetchAlbum(id) {
  return {
    types: [FETCH_ALBUM_PENDING, FETCH_ALBUM_SUCCESS, FETCH_ALBUM_ERROR],
    callAPI: () => axios.get(`https://api.openjam.eu/api/albums/${id}`),
    shouldCallAPI: state => true,
  };
}
