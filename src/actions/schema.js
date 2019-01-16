import { schema } from 'normalizr';

export const artistSchema = new schema.Entity('artists', {}, { idAttribute: '_id' });
export const artistListSchema = [artistSchema];
export const trackSchema = new schema.Entity('tracks', {}, { idAttribute: '_id' });
export const trackListSchema = [trackSchema];
