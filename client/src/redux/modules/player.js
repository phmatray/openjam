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
const UPDATE_CURRENT_PLAYLIST = 'player/UPDATE_CURRENT_PLAYLIST';
const UPDATE_CURRENT = 'player/UPDATE_CURRENT';
const UPDATE_AUDIO_INFO = 'player/UPDATE_AUDIO_INFO';
const UPDATE_POSITION = 'player/UPDATE_POSITION';

// Reducer
//
const initialState = {
  playlist: [],
  playlistId: 'default',
  current: null,
  currentId: 'default',
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
        currentId: state.playlist[getPreviousIndex(state.playlist.length, state.current.index)]._id,
        audioInfo: {
          position: initialState.audioInfo.position,
          duration: initialState.audioInfo.duration,
        },
      };

    case NEXT:
      return {
        ...state,
        current: state.playlist[getNextIndex(state.playlist.length, state.current.index)],
        currentId: state.playlist[getNextIndex(state.playlist.length, state.current.index)]._id,
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

    case UPDATE_CURRENT_PLAYLIST:
      return state.playlistId !== action.playlistId || state.playlist.length === 0
        ? {
            ...state,
            playlist: action.payload.map((track, index) => {
              return { ...track, index };
            }),
            playlistId: action.playlistId,
            current: { ...action.payload[0], index: 0 },
            currentId: action.payload[0]._id,
            audioInfo: {
              position: initialState.audioInfo.position,
              duration: initialState.audioInfo.duration,
            },
          }
        : {
            ...state,
          };

    case UPDATE_CURRENT:
      return {
        ...state,
        current: action.payload,
        currentId: action.payload._id,
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
export function play() {
  return { type: PLAY };
}

export function pause() {
  return { type: PAUSE };
}

export function stop() {
  return { type: STOP };
}

export function previous() {
  return { type: PREVIOUS };
}

export function next() {
  return { type: NEXT };
}

export function skipTo(index) {
  return { type: SKIP_TO, payload: index };
}

export function volume(volume) {
  return { type: VOLUME, payload: volume };
}

export function updatePlaylist(playlist) {
  let payload;
  let playlistId;
  if (playlist.type && playlist.type === 'playlist') {
    payload = playlist.tracks;
    playlistId = playlist._id;
  } else {
    payload = playlist;
    playlistId = initialState.playlistId;
  }

  return {
    type: UPDATE_CURRENT_PLAYLIST,
    payload: payload,
    playlistId: playlistId,
  };
}

export function updateCurrent(current) {
  return { type: UPDATE_CURRENT, payload: current };
}

export function updateAudioInfo(audioInfo) {
  return { type: UPDATE_AUDIO_INFO, payload: audioInfo };
}

export function updatePosition(position) {
  return { type: UPDATE_POSITION, payload: position };
}

// Side effects, only as applicable (thunks)
//
// Play the selected track
export function playSelected(playlist) {
  return dispatch => {
    dispatch(updatePlaylist(playlist));
    dispatch(play());
  };
}
