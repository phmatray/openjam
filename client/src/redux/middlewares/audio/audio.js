import { Howl, Howler } from 'howler';
import isEqual from '../../../validation/is-equal';

function optionsAreValid(type) {
  if (!type.startsWith('player/')) {
    return false;
  } else {
    return true;
  }
}

let audioPlaylist = [];

// Middleware
// Our middleware function receives an object with two fields: dispatch and getState.
// These are named parameters provided by Redux.
//
const audio = store => {
  const { dispatch, getState } = store;
  const playbackOrigin = 'playbackOrigin';

  // Ensure we reflect the store's initial state
  const initialState = getState();

  // Do the job...
  return next => action => {
    if (!optionsAreValid(action.type)) {
      return next(action);
    }

    const { playing: wasPlaying, playlist: prevPlaylist, current: previous } = getState().player;
    next(action);
    const { playing: isPlaying, playlist, current } = getState().player;

    // Don't dispatch any actions for actions that originated from the player
    if (action.origin === playbackOrigin) {
      return;
    }

    if (!isEqual(prevPlaylist, playlist)) {
      audioPlaylist = playlist.map(track => new Howl({ src: [track.audiourl] }));
    }

    if (!isEqual(previous, current) && previous !== null && current !== null) {
      // Stop the current track.
      if (audioPlaylist[previous.index]) {
        audioPlaylist[previous.index].stop();
      }

      // Play the next one.
      audioPlaylist[current.index].play();
    }

    if (!wasPlaying && isPlaying) {
      audioPlaylist[current.index].play();
    }

    if (wasPlaying && !isPlaying) {
      audioPlaylist[current.index].pause();
    }
  };
};

export default audio;
