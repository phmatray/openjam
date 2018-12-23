import axios from 'axios';

// Actions
//
const FETCH_ARTIST_PENDING = 'page-artist/FETCH_ARTIST_PENDING';
const FETCH_ARTIST_SUCCESS = 'page-artist/FETCH_ARTIST_SUCCESS';
const FETCH_ARTIST_ERROR = 'page-artist/FETCH_ARTIST_ERROR';

// Reducer
//
const initialState = {
  artist: null, // object
  artistLoading: false, // bool
  artistError: null,
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case FETCH_ARTIST_PENDING:
      return { ...state, artistLoading: true };

    case FETCH_ARTIST_SUCCESS:
      return { ...state, artist: action.payload, artistLoading: false };

    case FETCH_ARTIST_ERROR:
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

// Side effects, only as applicable (thunks)
//
// Fetch a artist by _id
export const fetchArtist = id => ({
  types: [FETCH_ARTIST_PENDING, FETCH_ARTIST_SUCCESS, FETCH_ARTIST_ERROR],
  callAPI: () =>
    axios.get(
      `${process.env.REACT_APP_ENDPOINT}/artist/${id}?%24embed=tracks&%24embed=tracks.artists`,
    ),
  shouldCallAPI: () => true,
});
