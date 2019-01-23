// @flow

import { createSelector } from 'redux-starter-kit';
import { selectRemixTracks } from 'store/modules/data/tracks';

export default {
  selectRemixTracks,

  selectRemixTracksLoading: createSelector(
    ['data.tracks.isFetching'],
    isFetching => isFetching,
  ),
};
