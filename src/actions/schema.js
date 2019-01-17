// @flow

import { schema } from 'normalizr';

export const artist = new schema.Entity('artists', {}, { idAttribute: '_id' });
export const artistList = [artist];
export const track = new schema.Entity('tracks', {}, { idAttribute: '_id' });
export const trackList = [track];
