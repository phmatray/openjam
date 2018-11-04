import axios from 'axios';
import { apiBase } from '../constants';

// Actions
//
const FETCH_PLAYLISTS_PENDING = 'playlist/FETCH_PLAYLISTS_PENDING';
const FETCH_PLAYLISTS_SUCCESS = 'playlist/FETCH_PLAYLISTS_SUCCESS';
const FETCH_PLAYLISTS_ERROR = 'playlist/FETCH_PLAYLISTS_ERROR';
const FETCH_PLAYLIST_PENDING = 'playlist/FETCH_PLAYLIST_PENDING';
const FETCH_PLAYLIST_SUCCESS = 'playlist/FETCH_PLAYLIST_SUCCESS';
const FETCH_PLAYLIST_ERROR = 'playlist/FETCH_PLAYLIST_ERROR';

// Reducer
//
const initialState = {
  playlists: null, // array
  playlist: null, // object
  loading: false, // bool
  error: null,
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case FETCH_PLAYLISTS_PENDING:
      return {
        ...state,
        loading: true,
      };

    case FETCH_PLAYLISTS_SUCCESS:
      return {
        ...state,
        playlists: action.payload,
        loading: false,
      };

    case FETCH_PLAYLISTS_ERROR:
      return {
        ...state,
        error: action.payload,
        playlists: null,
        loading: false,
      };

    case FETCH_PLAYLIST_PENDING:
      return {
        ...state,
        loading: true,
      };

    case FETCH_PLAYLIST_SUCCESS:
      return {
        ...state,
        playlist: action.payload,
        loading: false,
      };

    case FETCH_PLAYLIST_ERROR:
      return {
        ...state,
        error: action.payload,
        playlist: initialState.playlist,
        loading: false,
      };

    default:
      return state;
  }
};

export default reducer;

// Side effects, only as applicable (thunks)
//
// Fetch all playlists
export const fetchPlaylists = () => ({
  types: [FETCH_PLAYLISTS_PENDING, FETCH_PLAYLISTS_SUCCESS, FETCH_PLAYLISTS_ERROR],
  callAPI: () => axios.get(`${apiBase}/api/playlists`),
  shouldCallAPI: () => true,
});

// Fetch a playlist by _id
export const fetchPlaylist = id => ({
  types: [FETCH_PLAYLIST_PENDING, FETCH_PLAYLIST_SUCCESS, FETCH_PLAYLIST_ERROR],
  callAPI: () => axios.get(`${apiBase}/api/playlists/${id}`),
  shouldCallAPI: () => true,
});
