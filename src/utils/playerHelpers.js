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
  const milliseconds = Math.round(ms / 1000);

  // Hours, minutes and seconds
  const hrs = Math.floor(milliseconds / 3600);
  const mins = Math.floor((milliseconds % 3600) / 60);
  const secs = milliseconds % 60;

  // Output like "1:01" or "4:03:59" or "123:03:59"
  let ret = '';
  if (hrs > 0) {
    ret += `${hrs}:${mins < 10 ? '0' : ''}`;
  }
  ret += `${mins}:${secs < 10 ? '0' : ''}${secs}`;

  return ret;
};
