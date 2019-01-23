// @flow

import { createSelector } from 'redux-starter-kit';
import { selectOriginalTracks } from 'store/modules/data/tracks';

export default {
  selectOriginalTracks,

  selectOriginalTracksLoading: createSelector(
    ['data.tracks.isFetching'],
    isFetching => isFetching,
  ),
};
