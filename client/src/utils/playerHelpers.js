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
