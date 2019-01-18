// @flow

import { schema } from 'normalizr';

export const album = new schema.Entity('albums', {}, { idAttribute: '_id' });
export const albumList = [album];

export const artist = new schema.Entity('artists', {}, { idAttribute: '_id' });
export const artistList = [artist];

export const label = new schema.Entity('labels', {}, { idAttribute: '_id' });
export const labelList = [label];

export const playlist = new schema.Entity('playlists', {}, { idAttribute: '_id' });
export const playlistList = [playlist];

export const track = new schema.Entity('tracks', {}, { idAttribute: '_id' });
export const trackList = [track];
