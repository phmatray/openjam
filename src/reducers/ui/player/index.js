/* eslint-disable no-param-reassign */

import { getPreviousIndex, getNextIndex } from '../../../lib/utils/playerHelpers';
import { restGetTracks } from '../../../api/logion';

// Action Types
//
export const types = {
  FETCH_TRACKS_PENDING: 'player/FETCH_TRACKS_PENDING',
  FETCH_TRACKS_SUCCESS: 'player/FETCH_TRACKS_SUCCESS',
  FETCH_TRACKS_ERROR: 'player/FETCH_TRACKS_ERROR',

  PLAY: 'player/PLAY',
  PAUSE: 'player/PAUSE',
  STOP: 'player/STOP',
  PREVIOUS: 'player/PREVIOUS',
  NEXT: 'player/NEXT',

  UPDATE_AUDIO_INFO: 'player/UPDATE_AUDIO_INFO',
  UPDATE_POSITION: 'player/UPDATE_POSITION',
  UPDATE_VOLUME: 'player/UPDATE_VOLUME',

  LOAD_COLLECTION: 'player/LOAD_COLLECTION',
};

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
    case types.FETCH_TRACKS_PENDING:
      return { ...state, tracksLoading: true };

    case types.FETCH_TRACKS_SUCCESS:
      return { ...state, tracks: action.payload.docs, tracksLoading: false };

    case types.FETCH_TRACKS_ERROR:
      return { ...state, tracksError: action.payload, tracks: null, tracksLoading: false };

    case types.PLAY:
      return { ...state, playing: true, status: 'PLAYING' };

    case types.PAUSE:
      return { ...state, playing: false, status: 'PAUSED' };

    case types.STOP:
      return {
        ...state,
        playing: false,
        status: 'STOPPED',
        audioInfo: {
          position: initialState.audioInfo.position,
          duration: initialState.audioInfo.duration,
        },
      };

    case types.PREVIOUS:
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

    case types.NEXT:
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

    case types.UPDATE_AUDIO_INFO:
      return { ...state, audioInfo: action.payload };

    case types.UPDATE_POSITION:
      return { ...state, audioInfo: { ...state.audioInfo, position: action.payload } };

    case types.UPDATE_VOLUME:
      return { ...state, audioInfo: { ...state.audioInfo, volume: action.payload } };

    case types.LOAD_COLLECTION:
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

// Selectors
//
export const getTracks = state => state.ui.player.tracks;
export const getPlaylist = state => state.ui.player.playlist;
export const getPlaying = state => state.ui.player.playing;
export const getCurrent = state => state.ui.player.current;
export const getAudioInfo = state => state.ui.player.audioInfo;
export const getStatus = state => state.ui.player.status;
export const getCollection = state => state.ui.player.collection;
export const getCollectionId = state => state.ui.player.collectionId;

// Action Creators
//
export const actions = {
  play: () => ({ type: types.PLAY }),
  pause: () => ({ type: types.PAUSE }),
  stop: () => ({ type: types.STOP }),
  previous: () => ({ type: types.PREVIOUS }),
  next: () => ({ type: types.NEXT }),
  volume: volume => ({ type: types.UPDATE_VOLUME, payload: volume }),
  updateAudioInfo: audioInfo => ({ type: types.UPDATE_AUDIO_INFO, payload: audioInfo }),
  updatePosition: position => ({ type: types.UPDATE_POSITION, payload: position }),

  loadCollection: (collection, index = 0) => {
    if (collection.length) {
      collection = { type: 'default', tracks: collection };
    }

    return {
      type: types.LOAD_COLLECTION,
      payload: {
        collection: {
          ...collection,
          tracks: collection.tracks.map((track, i) => ({ ...track, index: i })),
        },
        current: { ...collection.tracks[index], index },
      },
    };
  },
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
    dispatch(actions.loadCollection(collection, 0));
  } else {
    const sameTrack = sameCollection && track._id === currentId;
    if (!sameTrack) {
      const index = collection.tracks.findIndex(element => element._id === track._id);
      dispatch(actions.loadCollection(collection, index));
    }
  }

  dispatch(actions.play());
};

export const playTrack = (track = null) => (dispatch, getState) => {
  if (track !== null) {
    const collection = { tracks: [track], _id: track._id };

    const { collectionId } = getState().player;
    const sameCollection = collection._id === collectionId;

    if (!sameCollection) {
      dispatch(actions.loadCollection(collection, 0));
    }
    dispatch(actions.play());
  }
};

export const fetchTracks = () => ({
  types: [types.FETCH_TRACKS_PENDING, types.FETCH_TRACKS_SUCCESS, types.FETCH_TRACKS_ERROR],
  callAPI: () => restGetTracks(),
  shouldCallAPI: () => true,
});
