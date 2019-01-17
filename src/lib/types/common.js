// @flow

export type AlbumBasic = {
  _id: string,
  name: string,
  images: { href: string }[],
  album_type: string,
  label: {},
};

export type UserBasic = {
  profileImageUrl: string,
  firstName: string,
  lastName: string,
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
