// @flow

import { combineReducers } from 'redux';
import type { CombinedReducer } from 'redux';
import { createSelector } from 'reselect';
import type { SelectorCreator } from 'reselect';

import type { StateRoot } from 'reducer';
import type { TrackBasic, AudioInfo, PlayerAction, ThunkAction } from 'lib/types';
import { getPreviousIndex, getNextIndex } from 'lib/utils/playerHelpers';

type Status = 'PLAYING' | 'PAUSED' | 'STOPPED';

export type StatePlayer = {
  status: Status,
  tracks: ?(TrackBasic[]),
  currentIndex: number,
  previous: ?TrackBasic,
  current: ?TrackBasic,
  next: ?TrackBasic,
  audioInfo: AudioInfo,
};

const Action = {
  PLAY: 'player/PLAY',
  PAUSE: 'player/PAUSE',
  STOP: 'player/STOP',
  PREVIOUS: 'player/PREVIOUS',
  NEXT: 'player/NEXT',
  UPDATE_AUDIO_INFO: 'player/UPDATE_AUDIO_INFO',
  UPDATE_POSITION: 'player/UPDATE_POSITION',
  UPDATE_VOLUME: 'player/UPDATE_VOLUME',
  UPDATE_TRACKS: 'player/UPDATE_TRACKS',
};

// Reducer
//
const status = (state: Status = 'STOPPED', action: PlayerAction) => {
  switch (action.type) {
    case Action.PLAY:
      return 'PLAYING';
    case Action.PAUSE:
      return 'PAUSED';
    case Action.STOP:
      return 'STOPPED';
    default:
      return state;
  }
};

const tracks = (state: ?(TrackBasic[]) = null, action: PlayerAction) => {
  switch (action.type) {
    case Action.UPDATE_TRACKS:
      console.warn(action.tracks);
      return action.tracks;
    default:
      return state;
  }
};

const tracksLength = (state: ?number = null, action: PlayerAction) => {
  switch (action.type) {
    case Action.UPDATE_TRACKS:
      return action.length;
    default:
      return state;
  }
};

const currentIndex = (state: ?number = null, action: PlayerAction) => {
  switch (action.type) {
    case Action.PREVIOUS:
    case Action.NEXT:
      return action.currentIndex;
    case Action.UPDATE_TRACKS:
      return 0;
    default:
      return state;
  }
};

const previous = (state: ?TrackBasic = null, action: PlayerAction) => {
  switch (action.type) {
    case Action.PREVIOUS:
    case Action.NEXT:
      return action.previous;
    case Action.UPDATE_TRACKS:
      return null;
    default:
      return state;
  }
};

const current = (state: ?TrackBasic = null, action: PlayerAction) => {
  switch (action.type) {
    case Action.PREVIOUS:
    case Action.NEXT:
      return action.current;
    case Action.UPDATE_TRACKS:
      return action.tracks[0];
    default:
      return state;
  }
};

const next = (state: ?TrackBasic = null, action: PlayerAction) => {
  switch (action.type) {
    case Action.PREVIOUS:
    case Action.NEXT:
      return action.next;
    case Action.UPDATE_TRACKS:
      return action.tracks[1];
    default:
      return state;
  }
};

const audioInfo = (
  state: AudioInfo = { position: 0, duration: 0, volume: 1 },
  action: PlayerAction,
) => {
  switch (action.type) {
    case Action.UPDATE_TRACKS:
    case Action.PREVIOUS:
    case Action.NEXT:
    case Action.STOP:
      return { ...state, position: 0, duration: 0 };
    case Action.UPDATE_AUDIO_INFO:
      return action.audioInfo;
    case Action.UPDATE_POSITION:
      return { ...state, position: action.position };
    case Action.UPDATE_VOLUME:
      return { ...state, volume: action.volume };
    default:
      return state;
  }
};

const reducers = {
  status,
  tracks,
  tracksLength,
  currentIndex,
  previous,
  current,
  next,
  audioInfo,
};

const player: CombinedReducer<StatePlayer, PlayerAction> = combineReducers(reducers);

export default player;

export function play(): PlayerAction {
  return { type: Action.PLAY };
}

export function pause(): PlayerAction {
  return { type: Action.PAUSE };
}

export function stop(): PlayerAction {
  return { type: Action.STOP };
}

export function updateVolume(volume: number): PlayerAction {
  return { type: Action.UPDATE_VOLUME, volume };
}

export function updateAudioInfo(audioInfo: AudioInfo): PlayerAction {
  return { type: Action.UPDATE_AUDIO_INFO, audioInfo };
}

export function updatePosition(position: number): PlayerAction {
  return { type: Action.UPDATE_POSITION, position };
}

export function updateTracks(tracks: TrackBasic[]): PlayerAction {
  return { type: Action.UPDATE_TRACKS, tracks, length: tracks.length };
}

export function previousTrack(): ThunkAction {
  return (dispatch, getState) => {
    const { tracks, tracksLength, currentIndex } = getState().ui.player;

    const nextIndex = currentIndex;
    const newCurrentIndex = getPreviousIndex(tracksLength, currentIndex);
    const previousIndex = getPreviousIndex(tracksLength, newCurrentIndex);

    const next = tracks[nextIndex];
    const newCurrent = tracks[newCurrentIndex];
    const previous = tracks[previousIndex];

    console.warn({ currentIndex });
    dispatch({
      type: Action.PREVIOUS,
      currentIndex: newCurrentIndex,
      previous,
      current: newCurrent,
      next,
    });
  };
}

export function nextTrack(): ThunkAction {
  return (dispatch, getState) => {
    const { tracks, tracksLength, currentIndex } = getState().ui.player;

    const previousIndex = currentIndex;
    const newCurrentIndex = getNextIndex(tracksLength, currentIndex);
    const nextIndex = getNextIndex(tracksLength, newCurrentIndex);

    const previous = tracks[previousIndex];
    const newCurrent = tracks[newCurrentIndex];
    const next = tracks[nextIndex];

    dispatch({
      type: Action.NEXT,
      currentIndex: newCurrentIndex,
      previous,
      current: newCurrent,
      next,
    });
  };
}

// Play the selected collection (playlist, album...)
// (A collection is an object containing the "tracks" property)
export function playSelected(collection: TrackBasic[], track: TrackBasic): ThunkAction {
  return (dispatch, getState) => {
    if (collection === null || collection === undefined || collection.tracks.length === 0) {
      throw new Error('collection cannot be null, undefined or empty');
    }

    const { collectionId, currentId } = getState().player;
    const sameCollection = collection._id === collectionId;

    if (track === null) {
      dispatch(updateTracks(collection, 0));
    } else {
      const sameTrack = sameCollection && track._id === currentId;
      if (!sameTrack) {
        const index = collection.tracks.findIndex(element => element._id === track._id);
        dispatch(updateTracks(collection, index));
      }
    }

    dispatch(play());
  };
}

export function playTrack(track: TrackBasic): ThunkAction {
  return (dispatch, getState) => {
    if (track !== null) {
      const collection = { tracks: [track], _id: track._id };

      const { collectionId } = getState().player;
      const sameCollection = collection._id === collectionId;

      if (!sameCollection) {
        dispatch(updateTracks(collection, 0));
      }
      dispatch(play());
    }
  };
}

// Selectors
//
export const getPlayer = (state: StateRoot) => state.ui.player;

export const getStatus: SelectorCreator = createSelector(
  [getPlayer],
  player => player.status,
);

export const getTracks: SelectorCreator = createSelector(
  [getPlayer],
  player => player.tracks,
);

export const getPrevious: SelectorCreator = createSelector(
  [getPlayer],
  player => player.previous,
);

export const getCurrent: SelectorCreator = createSelector(
  [getPlayer],
  player => player.current,
);

export const getNext: SelectorCreator = createSelector(
  [getPlayer],
  player => player.next,
);

export const getAudioInfo: SelectorCreator = createSelector(
  [getPlayer],
  player => player.audioInfo,
);

export const getPlaying: SelectorCreator = createSelector(
  [getStatus],
  status => !!(status === 'PLAYING'),
);

export const getCurrentIndex: SelectorCreator = createSelector(
  [getTracks, getCurrent],
  (tracks, current) => tracks.findIndex(current),
);
