import _ from 'lodash';
import { restGetArtists, restGetArtist } from '../../api/logion';

// Action Types
//
export const types = {
  FETCH_ARTISTS_PENDING: 'artist/FETCH_ARTISTS_PENDING',
  FETCH_ARTISTS_SUCCESS: 'artist/FETCH_ARTISTS_SUCCESS',
  FETCH_ARTISTS_ERROR: 'artist/FETCH_ARTISTS_ERROR',
  FETCH_ARTIST_PENDING: 'artist/FETCH_ARTIST_PENDING',
  FETCH_ARTIST_SUCCESS: 'artist/FETCH_ARTIST_SUCCESS',
  FETCH_ARTIST_ERROR: 'artist/FETCH_ARTIST_ERROR',
};

// Reducer
//
export const initialState = {
  artists: null, // array
  artist: null, // object
  loading: false, // bool
  error: null,
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case types.FETCH_ARTISTS_PENDING:
      return { ...state, loading: true };

    case types.FETCH_ARTISTS_SUCCESS:
      return { ...state, artists: action.payload.docs, loading: false };

    case types.FETCH_ARTISTS_ERROR:
      return { ...state, error: action.payload, artists: null, loading: false };

    case types.FETCH_ARTIST_PENDING:
      return { ...state, loading: true };

    case types.FETCH_ARTIST_SUCCESS:
      return { ...state, artist: action.payload, loading: false };

    case types.FETCH_ARTIST_ERROR:
      return { ...state, error: action.payload, artist: initialState.artist, loading: false };

    default:
      return state;
  }
};

export default reducer;

// Selectors
//
export const getArtists = state => state.artist.artists;
export const getArtist = (state, id) => _.find(state.artist.artists, a => a._id === id);
export const getLoading = state => state.artist.loading;

// Side effects, only as applicable (thunks)
//
// Fetch all artists
export const fetchArtists = () => ({
  types: [types.FETCH_ARTISTS_PENDING, types.FETCH_ARTISTS_SUCCESS, types.FETCH_ARTISTS_ERROR],
  callAPI: () => restGetArtists(),
  shouldCallAPI: () => true,
});

// Fetch a artist by _id
export const fetchArtist = id => ({
  types: [types.FETCH_ARTIST_PENDING, types.FETCH_ARTIST_SUCCESS, types.FETCH_ARTIST_ERROR],
  callAPI: () => restGetArtist(id),
  shouldCallAPI: () => true,
});
