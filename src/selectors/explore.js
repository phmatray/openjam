// @flow

import { createSelector } from 'redux-starter-kit';
import { selectOriginalTracks, selectRemixTracks } from 'store/modules/data/tracks';
import { selectArtists } from 'store/modules/data/artists';

export default {
  selectOriginalTracks,
  selectRemixTracks,
  selectArtists,

  selectOriginalTracksLoading: createSelector(
    ['data.tracks.isFetching'],
    isFetching => isFetching,
  ),

  selectRemixTracksLoading: createSelector(
    ['data.tracks.isFetching'],
    isFetching => isFetching,
  ),

  selectArtistsLoading: createSelector(
    ['data.artists.isFetching'],
    isFetching => isFetching,
  ),
};
