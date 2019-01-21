// @flow

import { createSelector } from 'reselect';

import * as fromById from '../../data/artists/byId';
import { getArtists } from '../../data/artists/index';

type State = {};

// Selectors
//
export const getArtistId = (state: State, artistId: string) => artistId;

export const getArtist = createSelector(
  [getArtists, getArtistId],
  (artists, artistId) => fromById.getArtist(artists.byId, artistId),
);
