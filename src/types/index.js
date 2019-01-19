// @flow
/* eslint-disable no-use-before-define */

// COMMON
//
export type AudioInfo = {
  position: number,
  duration: number,
  volume: number,
};

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
  type: 'album',
  album_type: string,
  name: string,
  release_date: string,
  images: { href: string }[],
  tracks: TrackBasic[],
  label: {},
};

export type ArtistBasic = {
  _id: string,
  type: 'artist',
  name: string,
  images: { url: string }[],
  genres: string[],
  information: {
    description: any,
    members: any,
    website: string,
    years: Year[],
    labels: string[],
    socials: string[],
  },
  followers: { total: number },
  fans: { total: number },
  tracks: { track: TrackBasic },
};

export type LabelBasic = {
  _id: string,
  type: 'label',
  name: string,
  imagesrc?: string,
};

export type PlaylistBasic = {
  _id: string,
  type: 'playlist',
  name: string,
  description: string,
  tracks: TrackBasic[],
};

export type TrackBasic = {
  _id: string,
  type: 'track',
  type2: 'original' | 'remix',
  title: string,
  edit: string,
  explicit: boolean,
  date: string,
  audiourl: string,
  coverurl: { w200: string, w400: string, w800: string },
  artists: { artist: ArtistBasic }[],
  albums: { album: AlbumBasic }[],
  meta: {
    description: any,
    lyrics: any,
    downloadable: boolean,
    downloads: [],
  },
};

export type UserBasic = {
  _id: string,
  email: string,
  profileImageUrl: string,
  firstName: string,
  lastName: string,
  handle: string,
  createdAt: string,
  roleName: string,
};

export type PostBasic = {
  _id: string,
  type: 'post-basic',
  byUser: UserBasic,
  createdAt: string,
  handle: string,
  text: string,
  likes?: [],
  shares?: [],
  comments?: CommentBasic[],
};

export type PostAudio = {
  _id: string,
  type: string,
  track: TrackBasic,
};

export type CommentBasic = {
  _id: string,
  type: 'comment',
  text: string,
  firstname: string,
  lastname: string,
  avatar: string,
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
