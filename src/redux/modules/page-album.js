import axios from 'axios';

// Actions
//
const FETCH_ALBUM_PENDING = 'page-album/FETCH_ALBUM_PENDING';
const FETCH_ALBUM_SUCCESS = 'page-album/FETCH_ALBUM_SUCCESS';
const FETCH_ALBUM_ERROR = 'page-album/FETCH_ALBUM_ERROR';

// Reducer
//
const initialState = {
  album: null, // object
  albumLoading: false, // bool
  albumError: null,
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case FETCH_ALBUM_PENDING:
      return { ...state, albumLoading: true };

    case FETCH_ALBUM_SUCCESS:
      return { ...state, album: action.payload, albumLoading: false };

    case FETCH_ALBUM_ERROR:
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

// Side effects, only as applicable (thunks)
//
// Fetch a album by _id
export const fetchAlbum = id => ({
  types: [FETCH_ALBUM_PENDING, FETCH_ALBUM_SUCCESS, FETCH_ALBUM_ERROR],
  callAPI: () => axios.get(`${process.env.REACT_APP_ENDPOINT}/albums/${id}`),
  shouldCallAPI: () => true,
});
