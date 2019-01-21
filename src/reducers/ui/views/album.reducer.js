// @flow

import { createSelector } from 'reselect';

import * as fromById from '../../data/albums/byId';
import { getAlbums } from '../../data/albums/index';

type State = {};

// Selectors
//
export const getAlbumId = (state: State, albumId: string) => albumId;

export const getAlbum = createSelector(
  [getAlbums, getAlbumId],
  (albums, albumId) => fromById.getAlbum(albums.byId, albumId),
);
