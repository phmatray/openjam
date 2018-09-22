import { Howl, Howler } from 'howler';
import isEqual from '../../../validation/is-equal';
import { fancyTimeFormat } from '../../../utils/playerHelpers';

function optionsAreValid(type) {
  if (!type.startsWith('player/')) {
    return false;
  } else {
    return true;
  }
}

const playbackOrigin = 'playbackOrigin';

let audioPlaylist = [];
let howlId = null;
let intervalId = null;

// Utility functions
//
const extractAction = howl => {
  const seek = howl.seek() || 0;
  const duration = howl.duration() || 0;

  const audioInfo = {
    seek: fancyTimeFormat(seek),
    duration: fancyTimeFormat(duration),
    seekPercentage: (seek / duration) * 100,
    volume: howl.volume(),
  };

  return {
    origin: playbackOrigin,
    type: 'player/UPDATE_AUDIO_INFO',
    payload: audioInfo,
  };
};

const setTimerDispatch = (howl, dispatch) => {
  intervalId = setInterval(() => {
    dispatch(extractAction(howl));
  }, 1000);
};

const clearTimerDispatch = howl => {
  if (intervalId !== null) {
    clearInterval(intervalId);
    howl.off();
  }
  intervalId = null;
};

const setEvents = (howl, dispatch) => {
  howl.once('play', () => {
    console.log('play: setTimerDispatch');
    setTimerDispatch(howl, dispatch);
  });

  howl.once('end', () => {
    console.log('end: clearTimerDispatch');
    clearTimerDispatch(howl);
  });

  howl.once('pause', () => {
    console.log('pause: clearTimerDispatch');
    clearTimerDispatch(howl);
  });

  howl.once('stop', () => {
    console.log('stop: clearTimerDispatch');
    clearTimerDispatch(howl);
  });
};

const play = (howl, dispatch) => {
  setEvents(howl, dispatch);
  howlId = howl.play();
  dispatch(extractAction(howl));
};

const pause = (howl, dispatch) => {
  howl.pause();
  dispatch(extractAction(howl));
};

// Middleware
// Our middleware function receives an object with two fields: dispatch and getState.
// These are named parameters provided by Redux.
//
const audio = store => {
  const { dispatch, getState } = store;

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

    // load playlist
    if (!isEqual(prevPlaylist, playlist)) {
      audioPlaylist = playlist.map(
        track => new Howl({ src: [track.audiourl], html5: true, preload: false }),
      );
    }

    // previous and next
    if (!isEqual(previous, current) && previous !== null && current !== null) {
      // Stop the current track.
      if (audioPlaylist[previous.index]) {
        audioPlaylist[previous.index].stop();
      }

      // Play the next one.
      play(audioPlaylist[current.index], dispatch);
    }

    // play
    else if (!wasPlaying && isPlaying) {
      play(audioPlaylist[current.index], dispatch);
    }

    // pause
    else if (wasPlaying && !isPlaying) {
      pause(audioPlaylist[current.index], dispatch);
    }
  };
};

export default audio;
