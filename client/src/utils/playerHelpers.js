export const getPreviousIndex = (playlistLength, currentIndex) => {
  let index = currentIndex - 1;
  if (index < 0) {
    index = playlistLength - 1;
  }

  return index;
};

export const getNextIndex = (playlistLength, currentIndex) => {
  let index = currentIndex + 1;
  if (index >= playlistLength) {
    index = 0;
  }

  return index;
};

export const fancyTimeFormat = ms => {
  ms = Math.round(ms / 1000);

  // Hours, minutes and seconds
  var hrs = ~~(ms / 3600);
  var mins = ~~((ms % 3600) / 60);
  var secs = ms % 60;

  // Output like "1:01" or "4:03:59" or "123:03:59"
  var ret = '';

  if (hrs > 0) {
    ret += '' + hrs + ':' + (mins < 10 ? '0' : '');
  }

  ret += '' + mins + ':' + (secs < 10 ? '0' : '');
  ret += '' + secs;
  return ret;
};
