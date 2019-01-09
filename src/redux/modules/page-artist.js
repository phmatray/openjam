import { restGetArtist } from '../../api/logion';

// Action Types
//
export const types = {
  FETCH_ARTIST_PENDING: 'page-artist/FETCH_ARTIST_PENDING',
  FETCH_ARTIST_SUCCESS: 'page-artist/FETCH_ARTIST_SUCCESS',
  FETCH_ARTIST_ERROR: 'page-artist/FETCH_ARTIST_ERROR',
};

// Reducer
//
export const initialState = {
  artist: null, // object
  artistLoading: false, // bool
  artistError: null,
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case types.FETCH_ARTIST_PENDING:
      return { ...state, artistLoading: true };

    case types.FETCH_ARTIST_SUCCESS:
      return { ...state, artist: action.payload, artistLoading: false };

    case types.FETCH_ARTIST_ERROR:
      return {
        ...state,
        artistError: action.payload,
        artist: initialState.artist,
        artistLoading: false,
      };

    default:
      return state;
  }
};

export default reducer;

// Selectors
//
export const getArtist = state => state.pageArtist.artist;
export const getArtistLoading = state => state.pageArtist.artistLoading;

// Side effects, only as applicable (thunks)
//
// Fetch a artist by _id
export const fetchArtist = id => ({
  types: [types.FETCH_ARTIST_PENDING, types.FETCH_ARTIST_SUCCESS, types.FETCH_ARTIST_ERROR],
  callAPI: () => restGetArtist(id),
  shouldCallAPI: () => true,
});
