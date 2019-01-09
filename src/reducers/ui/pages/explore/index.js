import { restGetTracks, restGetArtists } from '../../../../api/logion';

// Action Types
//
export const types = {
  FETCH_ORIGINAL_TRACKS_PENDING: 'page-explore/FETCH_ORIGINAL_TRACKS_PENDING',
  FETCH_ORIGINAL_TRACKS_SUCCESS: 'page-explore/FETCH_ORIGINAL_TRACKS_SUCCESS',
  FETCH_ORIGINAL_TRACKS_ERROR: 'page-explore/FETCH_ORIGINAL_TRACKS_ERROR',
  FETCH_REMIX_TRACKS_PENDING: 'page-explore/FETCH_REMIX_TRACKS_PENDING',
  FETCH_REMIX_TRACKS_SUCCESS: 'page-explore/FETCH_REMIX_TRACKS_SUCCESS',
  FETCH_REMIX_TRACKS_ERROR: 'page-explore/FETCH_REMIX_TRACKS_ERROR',
  FETCH_ARTISTS_PENDING: 'page-explore/FETCH_ARTISTS_PENDING',
  FETCH_ARTISTS_SUCCESS: 'page-explore/FETCH_ARTISTS_SUCCESS',
  FETCH_ARTISTS_ERROR: 'page-explore/FETCH_ARTISTS_ERROR',
};

// Reducer
//
export const initialState = {
  originalTracks: null, // array
  originalTracksLoading: false, // bool
  originalTracksError: null,
  remixTracks: null, // array
  remixTracksLoading: false, // bool
  remixTracksError: null,
  artists: null, // array
  artistsLoading: false, // bool
  artistsError: null,
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case types.FETCH_ORIGINAL_TRACKS_PENDING:
      return { ...state, originalTracksLoading: true };

    case types.FETCH_ORIGINAL_TRACKS_SUCCESS:
      return { ...state, originalTracks: action.payload.docs, originalTracksLoading: false };

    case types.FETCH_ORIGINAL_TRACKS_ERROR:
      return {
        ...state,
        originalTracksError: action.payload,
        originalTracks: null,
        originalTracksLoading: false,
      };

    case types.FETCH_REMIX_TRACKS_PENDING:
      return { ...state, remixTracksLoading: true };

    case types.FETCH_REMIX_TRACKS_SUCCESS:
      return { ...state, remixTracks: action.payload.docs, remixTracksLoading: false };

    case types.FETCH_REMIX_TRACKS_ERROR:
      return {
        ...state,
        remixTracksError: action.payload,
        remixTracks: null,
        remixTracksLoading: false,
      };

    case types.FETCH_ARTISTS_PENDING:
      return { ...state, artistsLoading: true };

    case types.FETCH_ARTISTS_SUCCESS:
      return { ...state, artists: action.payload.docs, artistsLoading: false };

    case types.FETCH_ARTISTS_ERROR:
      return { ...state, artistError: action.payload, artists: null, artistsLoading: false };

    default:
      return state;
  }
};

export default reducer;

// Selectors
//
export const getOriginalTracks = state => state.ui.pages.explore.originalTracks;
export const getOriginalTracksLoading = state => state.ui.pages.explore.originalTracksLoading;
export const getOriginalTracksError = state => state.ui.pages.explore.originalTracksError;
export const getRemixTracks = state => state.ui.pages.explore.remixTracks;
export const getRemixTracksLoading = state => state.ui.pages.explore.remixTracksLoading;
export const getRemixTracksError = state => state.ui.pages.explore.remixTracksError;
export const getArtists = state => state.ui.pages.explore.artists;
export const getArtistsLoading = state => state.ui.pages.explore.artistsLoading;
export const getArtistsError = state => state.ui.pages.explore.artistsError;

// Side effects, only as applicable (thunks)
//
// Fetch all original tracks
export const fetchOriginalTracks = () => ({
  types: [
    types.FETCH_ORIGINAL_TRACKS_PENDING,
    types.FETCH_ORIGINAL_TRACKS_SUCCESS,
    types.FETCH_ORIGINAL_TRACKS_ERROR,
  ],
  callAPI: () => restGetTracks('original'),
  shouldCallAPI: () => true,
});

// Fetch all remix tracks
export const fetchRemixTracks = () => ({
  types: [
    types.FETCH_REMIX_TRACKS_PENDING,
    types.FETCH_REMIX_TRACKS_SUCCESS,
    types.FETCH_REMIX_TRACKS_ERROR,
  ],
  callAPI: () => restGetTracks('remix'),
  shouldCallAPI: () => true,
});

// Fetch all artists
export const fetchArtists = () => ({
  types: [types.FETCH_ARTISTS_PENDING, types.FETCH_ARTISTS_SUCCESS, types.FETCH_ARTISTS_ERROR],
  callAPI: () => restGetArtists(),
  shouldCallAPI: () => true,
});
