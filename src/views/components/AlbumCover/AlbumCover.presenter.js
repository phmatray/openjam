// @flow

import React from 'react';

import type { AlbumBasic } from 'lib/types';

type Props = {
  album: AlbumBasic,
};

const AlbumCover = ({ album }: Props) => (
  <div
    style={{
      display: 'flex',
      flexWrap: 'wrap',
      borderRadius: '3%',
      overflow: 'hidden',
      border: '1px solid #ccc',
    }}
  >
    <img src={album.images[2].href} alt={album.name} style={{ width: '100%', height: '100%' }} />
  </div>
);

export default AlbumCover;
