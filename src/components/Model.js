// @flow

import React from 'react';

import Track from '../containers/Track';
import type { AlbumBasic, ArtistBasic, LabelBasic, PlaylistBasic, TrackBasic } from '../types';

import Artist from './model/Artist';
import Album from './model/Album';
import Playlist from './model/Playlist';
import Label from './model/Label';

type Props = {
  model: AlbumBasic | ArtistBasic | LabelBasic | PlaylistBasic | TrackBasic,
};

const Model = ({ model }: Props) => {
  switch (model.type) {
    case 'artist':
      return <Artist artist={model} />;
    case 'track':
      return <Track track={model} />;
    case 'album':
      return <Album album={model} />;
    case 'playlist':
      return <Playlist playlist={model} />;
    case 'label':
      return <Label label={model} />;
    default:
      return null;
  }
};

export default Model;
