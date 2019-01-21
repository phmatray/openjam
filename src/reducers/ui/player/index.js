// @flow

import { combineReducers } from 'redux';
import { createSelector } from 'reselect';

import types from '../../../actions/types/player-types';
import type { TrackBasic, AudioInfo, PlayerAction } from '../../../types';

type Status = 'PLAYING' | 'PAUSED' | 'STOPPED';

type State = {
  ui: {
    player: {
      status: Status,
      tracks: TrackBasic[],
      currentIndex: number,
      previous: ?TrackBasic,
      current: ?TrackBasic,
      next: ?TrackBasic,
      audioInfo: AudioInfo,
    },
  },
};

// Reducer
//
const status = (state: Status = 'STOPPED', action: PlayerAction) => {
  switch (action.type) {
    case types.PLAY:
      return 'PLAYING';
    case types.PAUSE:
      return 'PAUSED';
    case types.STOP:
      return 'STOPPED';
    default:
      return state;
  }
};

const tracks = (state: ?(TrackBasic[]) = null, action: PlayerAction) => {
  switch (action.type) {
    case types.UPDATE_TRACKS:
      return action.tracks;
    default:
      return state;
  }
};

const tracksLength = (state: ?number = null, action: PlayerAction) => {
  switch (action.type) {
    case types.UPDATE_TRACKS:
      return action.length;
    default:
      return state;
  }
};

const currentIndex = (state: ?number = null, action: PlayerAction) => {
  switch (action.type) {
    case types.PREVIOUS:
    case types.NEXT:
      return action.currentIndex;
    case types.UPDATE_TRACKS:
      return 0;
    default:
      return state;
  }
};

const previous = (state: ?TrackBasic = null, action: PlayerAction) => {
  switch (action.type) {
    case types.PREVIOUS:
    case types.NEXT:
      return action.previous;
    case types.UPDATE_TRACKS:
      return null;
    default:
      return state;
  }
};

const current = (state: ?TrackBasic = null, action: PlayerAction) => {
  switch (action.type) {
    case types.PREVIOUS:
    case types.NEXT:
      return action.current;
    case types.UPDATE_TRACKS:
      return action.tracks[0];
    default:
      return state;
  }
};

const next = (state: ?TrackBasic = null, action: PlayerAction) => {
  switch (action.type) {
    case types.PREVIOUS:
    case types.NEXT:
      return action.next;
    case types.UPDATE_TRACKS:
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
    case types.UPDATE_TRACKS:
    case types.PREVIOUS:
    case types.NEXT:
    case types.STOP:
      return { ...state, position: 0, duration: 0 };
    case types.UPDATE_AUDIO_INFO:
      return action.audioInfo;
    case types.UPDATE_POSITION:
      return { ...state, position: action.position };
    case types.UPDATE_VOLUME:
      return { ...state, volume: action.volume };
    default:
      return state;
  }
};

const player = combineReducers({
  status,
  tracks,
  tracksLength,
  currentIndex,
  previous,
  current,
  next,
  audioInfo,
});

export default player;

// Selectors
//
export const getPlayer = (state: State) => state.ui.player;

export const getStatus = createSelector(
  [getPlayer],
  player => player.status,
);

export const getTracks = createSelector(
  [getPlayer],
  player => player.tracks,
);

export const getPrevious = createSelector(
  [getPlayer],
  player => player.previous,
);

export const getCurrent = createSelector(
  [getPlayer],
  player => player.current,
);

export const getNext = createSelector(
  [getPlayer],
  player => player.next,
);

export const getAudioInfo = createSelector(
  [getPlayer],
  player => player.audioInfo,
);

export const getPlaying = createSelector(
  [getStatus],
  status => !!(status === 'PLAYING'),
);

export const getCurrentIndex = createSelector(
  [getTracks, getCurrent],
  (tracks, current) => tracks.findIndex(current),
);
