import { getPreviousIndex, getNextIndex } from '../../utils/playerHelpers';

// Actions
//
const PLAY = 'player/PLAY';
const PAUSE = 'player/PAUSE';
const STOP = 'player/STOP';
const PREVIOUS = 'player/PREVIOUS';
const NEXT = 'player/NEXT';

const LOAD_COLLECTION = 'player/LOAD_COLLECTION';

const UPDATE_AUDIO_INFO = 'player/UPDATE_AUDIO_INFO';
const UPDATE_POSITION = 'player/UPDATE_POSITION';
const UPDATE_VOLUME = 'player/UPDATE_VOLUME';

// Reducer
//
const initialState = {
  playing: false,
  status: 'STOPPED',
  collection: null,
  collectionId: null,
  current: null,
  currentId: null,
  audioInfo: {
    position: 0,
    duration: 0,
    volume: 1,
  },
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
        current:
          state.collection.tracks[
            getPreviousIndex(state.collection.tracks.length, state.current.index)
          ],
        currentId: getNextIndex(state.collection.tracks.length, state.current.index)._id,
        audioInfo: {
          position: initialState.audioInfo.position,
          duration: initialState.audioInfo.duration,
        },
      };

    case NEXT:
      return {
        ...state,
        current:
          state.collection.tracks[
            getNextIndex(state.collection.tracks.length, state.current.index)
          ],
        currentId: getNextIndex(state.collection.tracks.length, state.current.index)._id,
        audioInfo: {
          position: initialState.audioInfo.position,
          duration: initialState.audioInfo.duration,
        },
      };

    case LOAD_COLLECTION:
      return {
        ...state,
        collection: action.payload.collection,
        collectionId: action.payload.collection._id,
        current: action.payload.current,
        currentId: action.payload.current._id,
        audioInfo: {
          position: initialState.audioInfo.position,
          duration: initialState.audioInfo.duration,
        },
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

    case UPDATE_VOLUME:
      return {
        ...state,
        audioInfo: {
          ...state.audioInfo,
          volume: action.payload,
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

export function volume(volume) {
  return { type: UPDATE_VOLUME, payload: volume };
}

export function loadCollection(collection, index = 0) {
  if (collection.length) {
    collection = { type: 'default', tracks: collection };
  }

  return {
    type: LOAD_COLLECTION,
    payload: {
      collection: {
        ...collection,
        tracks: collection.tracks.map((track, i) => ({ ...track, index: i })),
      },
      current: { ...collection.tracks[index], index },
    },
  };
}

export function updateAudioInfo(audioInfo) {
  return { type: UPDATE_AUDIO_INFO, payload: audioInfo };
}

export function updatePosition(position) {
  return { type: UPDATE_POSITION, payload: position };
}

// Side effects, only as applicable (thunks)
//
// Play the selected collection (playlist, album...)
// (A collection is an object containing the "tracks" property)
export function playSelected(collection, track = null) {
  return (dispatch, getState) => {
    if (collection === null || collection === undefined || collection.tracks.length === 0) {
      throw new Error('collection cannot be null, undefined or empty');
    }

    const { collectionId, currentId } = getState().player;
    const sameCollection = collection._id === collectionId;

    if (track === null) {
      dispatch(loadCollection(collection, 0));
    } else {
      const sameTrack = sameCollection && track._id === currentId;
      if (!sameTrack) {
        const index = collection.tracks.findIndex(element => element._id === track._id);
        dispatch(loadCollection(collection, index));
      }
    }

    dispatch(play());
  };
}
