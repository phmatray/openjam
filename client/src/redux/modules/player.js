import { getPreviousIndex, getNextIndex } from '../../utils/playerHelpers';

// Actions
//
const PLAY = 'player/PLAY';
const PAUSE = 'player/PAUSE';
const STOP = 'player/STOP';
const PREVIOUS = 'player/PREVIOUS';
const NEXT = 'player/NEXT';
const SKIP_TO = 'player/SKIP_TO';
const VOLUME = 'player/VOLUME';
const UPDATE_PLAYLIST = 'player/UPDATE_PLAYLIST';
const UPDATE_CURRENT = 'player/UPDATE_CURRENT';
const UPDATE_AUDIO_INFO = 'player/UPDATE_AUDIO_INFO';
const UPDATE_POSITION = 'player/UPDATE_POSITION';

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
    position: 0,
    duration: 0,
    volume: 1,
  },
  status: 'PAUSED',
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case PLAY:
      return {
        ...state,
        playing: true,
        status: 'PLAYING',
      };

    case PAUSE:
      return {
        ...state,
        playing: false,
        status: 'PAUSED',
      };

    case STOP:
      return {
        ...state,
        playing: false,
        status: 'STOPPED',
        audioInfo: {
          position: initialState.audioInfo.position,
          duration: initialState.audioInfo.duration,
        },
      };

    case PREVIOUS:
      return {
        ...state,
        current: state.playlist[getPreviousIndex(state.playlist.length, state.current.index)],
        playing: true,
        status: 'PLAYING',
        audioInfo: {
          position: initialState.audioInfo.position,
          duration: initialState.audioInfo.duration,
        },
      };

    case NEXT:
      return {
        ...state,
        current: state.playlist[getNextIndex(state.playlist.length, state.current.index)],
        playing: true,
        status: 'PLAYING',
        audioInfo: {
          position: initialState.audioInfo.position,
          duration: initialState.audioInfo.duration,
        },
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
        audioInfo: {
          ...state.audioInfo,
          volume: action.payload,
        },
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

    case UPDATE_POSITION:
      return {
        ...state,
        audioInfo: {
          ...state.audioInfo,
          position: action.payload,
        },
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

export const stop = () => ({
  type: STOP,
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

export const updatePosition = position => ({
  type: UPDATE_POSITION,
  payload: position,
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
