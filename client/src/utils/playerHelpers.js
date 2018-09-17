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

export const fancyTimeFormat = time => {
  time = Math.round(time);

  // Hours, minutes and seconds
  var hrs = ~~(time / 3600);
  var mins = ~~((time % 3600) / 60);
  var secs = time % 60;

  // Output like "1:01" or "4:03:59" or "123:03:59"
  var ret = '';

  if (hrs > 0) {
    ret += '' + hrs + ':' + (mins < 10 ? '0' : '');
  }

  ret += '' + mins + ':' + (secs < 10 ? '0' : '');
  ret += '' + secs;
  return ret;
};
