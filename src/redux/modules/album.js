import _ from 'lodash';
import { restGetAlbums, restGetAlbum } from '../../services/logionApi';

// Action Types
//
export const types = {
  FETCH_ALBUMS_PENDING: 'album/FETCH_ALBUMS_PENDING',
  FETCH_ALBUMS_SUCCESS: 'album/FETCH_ALBUMS_SUCCESS',
  FETCH_ALBUMS_ERROR: 'album/FETCH_ALBUMS_ERROR',
  FETCH_ALBUM_PENDING: 'album/FETCH_ALBUM_PENDING',
  FETCH_ALBUM_SUCCESS: 'album/FETCH_ALBUM_SUCCESS',
  FETCH_ALBUM_ERROR: 'album/FETCH_ALBUM_ERROR',
};

// Reducer
//
export const initialState = {
  albums: null, // array
  album: null, // object
  loading: false, // bool
  error: null,
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case types.FETCH_ALBUMS_PENDING:
      return { ...state, loading: true };

    case types.FETCH_ALBUMS_SUCCESS:
      return { ...state, albums: action.payload.docs, loading: false };

    case types.FETCH_ALBUMS_ERROR:
      return { ...state, error: action.payload, albums: null, loading: false };

    case types.FETCH_ALBUM_PENDING:
      return { ...state, loading: true };

    case types.FETCH_ALBUM_SUCCESS:
      return { ...state, album: action.payload, loading: false };

    case types.FETCH_ALBUM_ERROR:
      return { ...state, error: action.payload, album: initialState.album, loading: false };

    default:
      return state;
  }
};

export default reducer;

// Selectors
//
export const getAlbums = state => state.album.albums;
export const getAlbum = (state, id) => _.find(state.album.albums, a => a._id === id);
export const getLoading = state => state.album.loading;

// Side effects, only as applicable (thunks)
//
// Fetch all albums
export const fetchAlbums = () => ({
  types: [types.FETCH_ALBUMS_PENDING, types.FETCH_ALBUMS_SUCCESS, types.FETCH_ALBUMS_ERROR],
  callAPI: () => restGetAlbums(),
  shouldCallAPI: () => true,
});

// Fetch a album by _id
export const fetchAlbum = id => ({
  types: [types.FETCH_ALBUM_PENDING, types.FETCH_ALBUM_SUCCESS, types.FETCH_ALBUM_ERROR],
  callAPI: () => restGetAlbum(id),
  shouldCallAPI: () => true,
});
