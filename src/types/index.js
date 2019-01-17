// @flow

// FILTERS
//
export type ArtistFilter = ?'all';
export type TrackFilter = ?'all' | ?'original' | ?'remix';

// REDUX
//
export type Action =
  | { type: 'FETCH_TRACKS_REQUEST', filter: TrackFilter }
  | { type: 'FETCH_TRACKS_SUCCESS', filter: TrackFilter, response: {}[] }
  | { type: 'FETCH_TRACKS_FAILURE', filter: TrackFilter, message: string }
  | { type: 'ADD_TRACK_SUCCESS', response: {} }
  | { type: 'FETCH_ARTISTS_REQUEST', filter: ArtistFilter }
  | { type: 'FETCH_ARTISTS_SUCCESS', filter: ArtistFilter, response: {}[] }
  | { type: 'FETCH_ARTISTS_FAILURE', filter: ArtistFilter, message: string }
  | { type: 'ADD_ARTIST_SUCCESS', response: {} };

export type Dispatch = (action: Action | ThunkAction | PromiseAction | Array<Action>) => any;
export type GetState = () => Object;
export type ThunkAction = (dispatch: Dispatch, getState: GetState) => any;
export type PromiseAction = Promise<Action>;

// ENTITIES
//
export type AlbumBasic = {
  _id: string,
  name: string,
  images: { href: string }[],
  album_type: string,
  label: {},
};

export type ArtistBasic = {
  _id: string,
};

export type TrackBasic = {
  _id: string,
};

export type UserBasic = {
  profileImageUrl: string,
  firstName: string,
  lastName: string,
};

// COMMON
//
export type Year = {
  from: string,
  to?: string,
};

export type Domain =
  | 'youtube'
  | 'facebook'
  | 'linkedin'
  | 'instagram'
  | 'github'
  | 'twitter'
  | 'soundcloud'
  | 'bandcamp'
  | 'openjam';
