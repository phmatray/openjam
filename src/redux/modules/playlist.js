import { restGetPlaylists, restGetPlaylist } from '../../api/logion';

// Action Types
//
export const types = {
  FETCH_PLAYLISTS_PENDING: 'playlist/FETCH_PLAYLISTS_PENDING',
  FETCH_PLAYLISTS_SUCCESS: 'playlist/FETCH_PLAYLISTS_SUCCESS',
  FETCH_PLAYLISTS_ERROR: 'playlist/FETCH_PLAYLISTS_ERROR',
  FETCH_PLAYLIST_PENDING: 'playlist/FETCH_PLAYLIST_PENDING',
  FETCH_PLAYLIST_SUCCESS: 'playlist/FETCH_PLAYLIST_SUCCESS',
  FETCH_PLAYLIST_ERROR: 'playlist/FETCH_PLAYLIST_ERROR',
};

// Reducer
//
export const initialState = {
  playlists: null, // array
  playlist: null, // object
  loading: false, // bool
  error: null,
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case types.FETCH_PLAYLISTS_PENDING:
      return { ...state, loading: true };

    case types.FETCH_PLAYLISTS_SUCCESS:
      return { ...state, playlists: action.payload.docs, loading: false };

    case types.FETCH_PLAYLISTS_ERROR:
      return { ...state, error: action.payload, playlists: null, loading: false };

    case types.FETCH_PLAYLIST_PENDING:
      return { ...state, loading: true };

    case types.FETCH_PLAYLIST_SUCCESS:
      return { ...state, playlist: action.payload, loading: false };

    case types.FETCH_PLAYLIST_ERROR:
      return { ...state, error: action.payload, playlist: initialState.playlist, loading: false };

    default:
      return state;
  }
};

export default reducer;

// Selectors
//
export const getPlaylists = state => state.playlist.playlists;
export const getPlaylist = state => state.playlist.playlist;
export const getLoading = state => state.playlist.loading;

// Side effects, only as applicable (thunks)
//
// Fetch all playlists
export const fetchPlaylists = () => ({
  types: [
    types.FETCH_PLAYLISTS_PENDING,
    types.FETCH_PLAYLISTS_SUCCESS,
    types.FETCH_PLAYLISTS_ERROR,
  ],
  callAPI: () => restGetPlaylists(),
  shouldCallAPI: () => true,
});

// Fetch a playlist by _id
export const fetchPlaylist = id => ({
  types: [types.FETCH_PLAYLIST_PENDING, types.FETCH_PLAYLIST_SUCCESS, types.FETCH_PLAYLIST_ERROR],
  callAPI: () => restGetPlaylist(id),
  shouldCallAPI: () => true,
});
