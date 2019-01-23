// @flow

import React from 'react';

import Album from 'views/components/Album';
import Artist from 'views/components/Artist';
import Label from 'views/components/Label';
import Playlist from 'views/components/Playlist';
import Track from 'views/components/Track';

type Props = {
  type: 'album' | 'artist' | 'label' | 'playlist' | 'track',
};

const Model = ({ type, ...rest }: Props) => {
  switch (type) {
    case 'album':
      return <Album {...rest} />;
    case 'artist':
      return <Artist {...rest} />;
    case 'label':
      return <Label {...rest} />;
    case 'playlist':
      return <Playlist {...rest} />;
    case 'track':
      return <Track {...rest} />;

    default:
      return null;
  }
};

export default Model;
