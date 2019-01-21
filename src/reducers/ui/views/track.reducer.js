// @flow

import { createSelector } from 'reselect';

import * as fromById from '../../data/tracks/byId';
import { getTracks } from '../../data/tracks/index';

type State = {};

// Selectors
//
export const getTrackId = (state: State, trackId: string) => trackId;

export const getTrack = createSelector(
  [getTracks, getTrackId],
  (tracks, trackId) => fromById.getTrack(tracks.byId, trackId),
);
