// @flow

import React from 'react';

import Artist from './model/Artist';
import Track from './model/Track';
import Album from './model/Album';
import Playlist from './model/Playlist';
import Label from './model/Label';

type Props = {
  model: { type: 'artist' | 'track' | 'album' | 'playlist' | 'label' },
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
