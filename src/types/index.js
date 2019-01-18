// @flow
/* eslint-disable no-use-before-define */

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

export type LabelBasic = {
  _id: string,
};

export type PlaylistBasic = {
  _id: string,
};

export type TrackBasic = {
  _id: string,
  type: string,
  type2: string,
  title: string,
  edit: string,
  date: string,
  coverurl: { w200: string },
  artists: { artist: { name: string } }[],
};

export type UserBasic = {
  profileImageUrl: string,
  firstName: string,
  lastName: string,
};

// FILTERS
//
export type AlbumFilter = ?'all';
export type ArtistFilter = ?'all';
export type LabelFilter = ?'all';
export type PlaylistFilter = ?'all';
export type TrackFilter = ?'all' | ?'original' | ?'remix';

// REDUX
//
export type Action =
  | { type: 'FETCH_ALBUMS_REQUEST', filter: AlbumFilter }
  | { type: 'FETCH_ALBUMS_SUCCESS', filter: AlbumFilter, response: {}[] }
  | { type: 'FETCH_ALBUMS_FAILURE', filter: AlbumFilter, message: string }
  | { type: 'ADD_ALBUM_SUCCESS', response: {} }
  | { type: 'FETCH_ARTISTS_REQUEST', filter: ArtistFilter }
  | { type: 'FETCH_ARTISTS_SUCCESS', filter: ArtistFilter, response: {}[] }
  | { type: 'FETCH_ARTISTS_FAILURE', filter: ArtistFilter, message: string }
  | { type: 'ADD_ARTIST_SUCCESS', response: {} }
  | { type: 'FETCH_LABELS_REQUEST', filter: LabelFilter }
  | { type: 'FETCH_LABELS_SUCCESS', filter: LabelFilter, response: {}[] }
  | { type: 'FETCH_LABELS_FAILURE', filter: LabelFilter, message: string }
  | { type: 'ADD_LABEL_SUCCESS', response: {} }
  | { type: 'FETCH_PLAYLISTS_REQUEST', filter: PlaylistFilter }
  | { type: 'FETCH_PLAYLISTS_SUCCESS', filter: PlaylistFilter, response: {}[] }
  | { type: 'FETCH_PLAYLISTS_FAILURE', filter: PlaylistFilter, message: string }
  | { type: 'ADD_PLAYLIST_SUCCESS', response: {} }
  | { type: 'FETCH_TRACKS_REQUEST', filter: TrackFilter }
  | { type: 'FETCH_TRACKS_SUCCESS', filter: TrackFilter, response: {}[] }
  | { type: 'FETCH_TRACKS_FAILURE', filter: TrackFilter, message: string }
  | { type: 'ADD_TRACK_SUCCESS', response: {} };

export type Dispatch = (action: Action | ThunkAction | PromiseAction | Array<Action>) => any;
export type GetState = () => Object;
export type ThunkAction = (dispatch: Dispatch, getState: GetState) => any;
export type PromiseAction = Promise<Action>;
