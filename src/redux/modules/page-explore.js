import { restGetTracks, restGetArtists } from '../logion';

// Actions
//
const FETCH_ORIGINAL_TRACKS_PENDING = 'page-explore/FETCH_ORIGINAL_TRACKS_PENDING';
const FETCH_ORIGINAL_TRACKS_SUCCESS = 'page-explore/FETCH_ORIGINAL_TRACKS_SUCCESS';
const FETCH_ORIGINAL_TRACKS_ERROR = 'page-explore/FETCH_ORIGINAL_TRACKS_ERROR';
const FETCH_REMIX_TRACKS_PENDING = 'page-explore/FETCH_REMIX_TRACKS_PENDING';
const FETCH_REMIX_TRACKS_SUCCESS = 'page-explore/FETCH_REMIX_TRACKS_SUCCESS';
const FETCH_REMIX_TRACKS_ERROR = 'page-explore/FETCH_REMIX_TRACKS_ERROR';
const FETCH_ARTISTS_PENDING = 'page-explore/FETCH_ARTISTS_PENDING';
const FETCH_ARTISTS_SUCCESS = 'page-explore/FETCH_ARTISTS_SUCCESS';
const FETCH_ARTISTS_ERROR = 'page-explore/FETCH_ARTISTS_ERROR';

// Reducer
//
const initialState = {
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
    case FETCH_ORIGINAL_TRACKS_PENDING:
      return { ...state, originalTracksLoading: true };

    case FETCH_ORIGINAL_TRACKS_SUCCESS:
      return { ...state, originalTracks: action.payload.docs, originalTracksLoading: false };

    case FETCH_ORIGINAL_TRACKS_ERROR:
      return {
        ...state,
        originalTracksError: action.payload,
        originalTracks: null,
        originalTracksLoading: false,
      };

    case FETCH_REMIX_TRACKS_PENDING:
      return { ...state, remixTracksLoading: true };

    case FETCH_REMIX_TRACKS_SUCCESS:
      return { ...state, remixTracks: action.payload.docs, remixTracksLoading: false };

    case FETCH_REMIX_TRACKS_ERROR:
      return {
        ...state,
        remixTracksError: action.payload,
        remixTracks: null,
        remixTracksLoading: false,
      };

    case FETCH_ARTISTS_PENDING:
      return { ...state, artistsLoading: true };

    case FETCH_ARTISTS_SUCCESS:
      return { ...state, artists: action.payload.docs, artistsLoading: false };

    case FETCH_ARTISTS_ERROR:
      return { ...state, artistError: action.payload, artists: null, artistsLoading: false };

    default:
      return state;
  }
};

export default reducer;

// Side effects, only as applicable (thunks)
//
// Fetch all original tracks
export const fetchOriginalTracks = () => ({
  types: [
    FETCH_ORIGINAL_TRACKS_PENDING,
    FETCH_ORIGINAL_TRACKS_SUCCESS,
    FETCH_ORIGINAL_TRACKS_ERROR,
  ],
  callAPI: () => restGetTracks('original'),
  shouldCallAPI: () => true,
});

// Fetch all remix tracks
export const fetchRemixTracks = () => ({
  types: [FETCH_REMIX_TRACKS_PENDING, FETCH_REMIX_TRACKS_SUCCESS, FETCH_REMIX_TRACKS_ERROR],
  callAPI: () => restGetTracks('remix'),
  shouldCallAPI: () => true,
});

// Fetch all artists
export const fetchArtists = () => ({
  types: [FETCH_ARTISTS_PENDING, FETCH_ARTISTS_SUCCESS, FETCH_ARTISTS_ERROR],
  callAPI: () => restGetArtists(),
  shouldCallAPI: () => true,
});
