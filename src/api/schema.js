// @flow

import { schema } from 'normalizr';

export const user = new schema.Entity('users', {}, { idAttribute: '_id' });
export const album = new schema.Entity('albums', {}, { idAttribute: '_id' });
export const artist = new schema.Entity('artists', {}, { idAttribute: '_id' });
export const label = new schema.Entity('labels', {}, { idAttribute: '_id' });
export const playlist = new schema.Entity('playlists', {}, { idAttribute: '_id' });

export const track = new schema.Entity(
  'tracks',
  {
    artists: [artist],
  },
  { idAttribute: '_id' },
);

export const albumList = [album];
export const artistList = [artist];
export const labelList = [label];
export const playlistList = [playlist];
export const trackList = [track];
