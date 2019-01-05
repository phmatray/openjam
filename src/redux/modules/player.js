/* eslint-disable no-param-reassign */

import { getPreviousIndex, getNextIndex } from '../../utils/playerHelpers';
import { restGetTracks } from '../logion';

// Actions
//
const FETCH_TRACKS_PENDING = 'player/FETCH_TRACKS_PENDING';
const FETCH_TRACKS_SUCCESS = 'player/FETCH_TRACKS_SUCCESS';
const FETCH_TRACKS_ERROR = 'player/FETCH_TRACKS_ERROR';

const PLAY = 'player/PLAY';
const PAUSE = 'player/PAUSE';
const STOP = 'player/STOP';
const PREVIOUS = 'player/PREVIOUS';
const NEXT = 'player/NEXT';

const UPDATE_AUDIO_INFO = 'player/UPDATE_AUDIO_INFO';
const UPDATE_POSITION = 'player/UPDATE_POSITION';
const UPDATE_VOLUME = 'player/UPDATE_VOLUME';

const LOAD_COLLECTION = 'player/LOAD_COLLECTION';

// Reducer
//
const initialState = {
  tracks: null, // array
  tracksLoading: false, // bool
  tracksError: null,

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

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case FETCH_TRACKS_PENDING:
      return { ...state, tracksLoading: true };

    case FETCH_TRACKS_SUCCESS:
      return { ...state, tracks: action.payload.docs, tracksLoading: false };

    case FETCH_TRACKS_ERROR:
      return { ...state, tracksError: action.payload, tracks: null, tracksLoading: false };

    case PLAY:
      return { ...state, playing: true, status: 'PLAYING' };

    case PAUSE:
      return { ...state, playing: false, status: 'PAUSED' };

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

    case UPDATE_AUDIO_INFO:
      return { ...state, audioInfo: action.payload };

    case UPDATE_POSITION:
      return { ...state, audioInfo: { ...state.audioInfo, position: action.payload } };

    case UPDATE_VOLUME:
      return { ...state, audioInfo: { ...state.audioInfo, volume: action.payload } };

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

    default:
      return state;
  }
};

export default reducer;

// Action Creators
//
export const play = () => ({ type: PLAY });
export const pause = () => ({ type: PAUSE });
export const stop = () => ({ type: STOP });
export const previous = () => ({ type: PREVIOUS });
export const next = () => ({ type: NEXT });
export const volume = volume => ({ type: UPDATE_VOLUME, payload: volume });
export const updateAudioInfo = audioInfo => ({ type: UPDATE_AUDIO_INFO, payload: audioInfo });
export const updatePosition = position => ({ type: UPDATE_POSITION, payload: position });

export const loadCollection = (collection, index = 0) => {
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
};

// Side effects, only as applicable (thunks)
//
// Play the selected collection (playlist, album...)
// (A collection is an object containing the "tracks" property)
export const playSelected = (collection, track = null) => (dispatch, getState) => {
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

export const playTrack = (track = null) => (dispatch, getState) => {
  if (track !== null) {
    const collection = { tracks: [track], _id: track._id };

    const { collectionId } = getState().player;
    const sameCollection = collection._id === collectionId;

    if (!sameCollection) {
      dispatch(loadCollection(collection, 0));
    }
    dispatch(play());
  }
};

export const fetchTracks = () => ({
  types: [FETCH_TRACKS_PENDING, FETCH_TRACKS_SUCCESS, FETCH_TRACKS_ERROR],
  callAPI: () => restGetTracks(),
  shouldCallAPI: () => true,
});
