import { restGetAlbum } from '../../services/logionApi';

// Action Types
//
export const types = {
  FETCH_ALBUM_PENDING: 'page-album/FETCH_ALBUM_PENDING',
  FETCH_ALBUM_SUCCESS: 'page-album/FETCH_ALBUM_SUCCESS',
  FETCH_ALBUM_ERROR: 'page-album/FETCH_ALBUM_ERROR',
};

// Reducer
//
export const initialState = {
  album: null, // object
  albumLoading: false, // bool
  albumError: null,
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case types.FETCH_ALBUM_PENDING:
      return { ...state, albumLoading: true };

    case types.FETCH_ALBUM_SUCCESS:
      return { ...state, album: action.payload, albumLoading: false };

    case types.FETCH_ALBUM_ERROR:
      return {
        ...state,
        albumError: action.payload,
        album: initialState.album,
        albumLoading: false,
      };

    default:
      return state;
  }
};

export default reducer;

// Selectors
//
export const getAlbum = state => state.pageAlbum.album;
export const getAlbumLoading = state => state.pageAlbum.albumLoading;

// Side effects, only as applicable (thunks)
//
// Fetch a album by _id
export const fetchAlbum = id => ({
  types: [types.FETCH_ALBUM_PENDING, types.FETCH_ALBUM_SUCCESS, types.FETCH_ALBUM_ERROR],
  callAPI: () => restGetAlbum(id),
  shouldCallAPI: () => true,
});
