import { restGetTrack, restGetArtistTracks } from '../../../../api/logion';

// Action Types
//
export const types = {
  FETCH_TRACK_PENDING: 'page-track/FETCH_TRACK_PENDING',
  FETCH_TRACK_SUCCESS: 'page-track/FETCH_TRACK_SUCCESS',
  FETCH_TRACK_ERROR: 'page-track/FETCH_TRACK_ERROR',
  BY_ARTIST_PENDING: 'page-track/BY_ARTIST_PENDING',
  BY_ARTIST_SUCCESS: 'page-track/BY_ARTIST_SUCCESS',
  BY_ARTIST_ERROR: 'page-track/BY_ARTIST_ERROR',
};

// Reducer
//
export const initialState = {
  track: null, // object
  trackLoading: false, // bool
  trackError: null,
  byArtist: [],
  byArtistLoading: false,
  byArtistError: null,
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case types.FETCH_TRACK_PENDING:
      return { ...state, trackLoading: true };

    case types.FETCH_TRACK_SUCCESS:
      return { ...state, track: action.payload, trackLoading: false };

    case types.FETCH_TRACK_ERROR:
      return {
        ...state,
        trackError: action.payload,
        track: initialState.track,
        trackLoading: false,
      };

    case types.BY_ARTIST_PENDING:
      return { ...state, byArtistLoading: true };

    case types.BY_ARTIST_SUCCESS:
      return { ...state, byArtist: action.payload.docs, byArtistLoading: false };

    case types.BY_ARTIST_ERROR:
      return {
        ...state,
        byArtistError: action.payload,
        byArtist: initialState.byArtist,
        byArtistLoading: false,
      };

    default:
      return state;
  }
};

export default reducer;

// Selectors
//
export const getTrack = state => state.ui.pages.track.track;
export const getTrackLoading = state => state.ui.pages.track.trackLoading;
export const getTrackError = state => state.ui.pages.track.trackError;
export const getByArtist = state => state.ui.pages.track.byArtist;
export const getByArtistLoading = state => state.ui.pages.track.byArtistLoading;
export const getByArtistError = state => state.ui.pages.track.byArtistError;

// Side effects, only as applicable (thunks)
//
// Fetch a track by _id
export const fetchTrack = id => ({
  types: [types.FETCH_TRACK_PENDING, types.FETCH_TRACK_SUCCESS, types.FETCH_TRACK_ERROR],
  callAPI: () => restGetTrack(id),
  shouldCallAPI: () => true,
});

export const fetchTracksByArtistId = (artistId, limit = 3) => ({
  types: [types.BY_ARTIST_PENDING, types.BY_ARTIST_SUCCESS, types.BY_ARTIST_ERROR],
  callAPI: () => restGetArtistTracks(artistId, limit),
  shouldCallAPI: () => true,
});
