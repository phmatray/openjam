import { getPreviousIndex, getNextIndex } from '../../utils/playerHelpers';

// Actions
//
const PLAY = 'player/PLAY';
const PAUSE = 'player/PAUSE';
const PREVIOUS = 'player/PREVIOUS';
const NEXT = 'player/NEXT';
const SKIP_TO = 'player/SKIP_TO';
const VOLUME = 'player/VOLUME';
const UPDATE_PLAYLIST = 'player/UPDATE_PLAYLIST';
const UPDATE_CURRENT = 'player/UPDATE_CURRENT';
const UPDATE_AUDIO_INFO = 'player/UPDATE_AUDIO_INFO';

// Reducer
//
const initialState = {
  playlist: [],
  current: null,
  playing: false,
  loading: true,
  volume: 0.6,
  progress: 0,
  seek: 0,
  audioInfo: {
    seek: 0,
    duration: 0,
    seekPercentage: 0,
    volume: 0,
  },
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case PLAY:
      return {
        ...state,
        playing: true,
      };

    case PAUSE:
      return {
        ...state,
        playing: false,
      };

    case PREVIOUS:
      return {
        ...state,
        current: state.playlist[getPreviousIndex(state.playlist.length, state.current.index)],
        playing: true,
      };

    case NEXT:
      return {
        ...state,
        current: state.playlist[getNextIndex(state.playlist.length, state.current.index)],
        playing: true,
      };

    case SKIP_TO:
      return {
        ...state,
        index: state.payload,
        playing: true,
      };

    case VOLUME:
      return {
        ...state,
        volume: action.payload,
      };

    case UPDATE_PLAYLIST:
      return {
        ...state,
        playlist: action.payload.map((track, index) => {
          return { ...track, index };
        }),
        current: { ...action.payload[0], index: 0 },
      };

    case UPDATE_CURRENT:
      return {
        ...state,
        current: action.payload,
      };

    case UPDATE_AUDIO_INFO:
      return {
        ...state,
        audioInfo: action.payload,
      };

    default:
      return state;
  }
}

// Action Creators
//
export const play = () => ({
  type: PLAY,
});

export const pause = () => ({
  type: PAUSE,
});

export const previous = () => ({
  type: PREVIOUS,
});

export const next = () => ({
  type: NEXT,
});

export const skipTo = index => ({
  type: SKIP_TO,
  payload: index,
});

export const volume = volume => ({
  type: VOLUME,
  payload: volume,
});

export const updatePlaylist = playlist => ({
  type: UPDATE_PLAYLIST,
  payload: playlist,
});

export const updateCurrent = current => ({
  type: UPDATE_CURRENT,
  payload: current,
});

export const updateAudioInfo = audioInfo => ({
  type: UPDATE_AUDIO_INFO,
  payload: audioInfo,
});

// Side effects, only as applicable (thunks)
//
// // Select playlist
// export function selectPlaylist(playlist) {
//   return dispatch => {
//     dispatch(updatePlaylist(playlist));
//     if (playlist && playlist.length > 0) {
//       const current = playlist[0];
//       dispatch(updateCurrent(current));
//     }
//   };
// }

// Play the selected track
export function playSelected(track) {
  return dispatch => {
    dispatch(updateCurrent(track));
    dispatch(play());
  };
}
