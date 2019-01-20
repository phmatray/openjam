// @flow

import types from '../types/player-types';
import type { TrackBasic, AudioInfo, PlayerAction, ThunkAction } from '../../types';
import { getPreviousIndex, getNextIndex } from '../../lib/utils/playerHelpers';

export function play(): PlayerAction {
  return { type: types.PLAY };
}

export function pause(): PlayerAction {
  return { type: types.PAUSE };
}

export function stop(): PlayerAction {
  return { type: types.STOP };
}

export function updateVolume(volume: number): PlayerAction {
  return { type: types.UPDATE_VOLUME, volume };
}

export function updateAudioInfo(audioInfo: AudioInfo): PlayerAction {
  return { type: types.UPDATE_AUDIO_INFO, audioInfo };
}

export function updatePosition(position: number): PlayerAction {
  return { type: types.UPDATE_POSITION, position };
}

export function updateTracks(tracks: TrackBasic[]): PlayerAction {
  return { type: types.UPDATE_TRACKS, tracks, length: tracks.length };
}

export function previous(): ThunkAction {
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
      type: types.PREVIOUS,
      currentIndex: newCurrentIndex,
      previous,
      current: newCurrent,
      next,
    });
  };
}

export function next(): ThunkAction {
  return (dispatch, getState) => {
    const { tracks, tracksLength, currentIndex } = getState().ui.player;

    const previousIndex = currentIndex;
    const newCurrentIndex = getNextIndex(tracksLength, currentIndex);
    const nextIndex = getNextIndex(tracksLength, newCurrentIndex);

    const previous = tracks[previousIndex];
    const newCurrent = tracks[newCurrentIndex];
    const next = tracks[nextIndex];

    console.warn({ currentIndex });
    dispatch({
      type: types.NEXT,
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
