// @flow

import React from 'react';
import { Link } from 'react-router-dom';

import LinkEntity from '../LinkEntity';
import type { AlbumBasic } from '../../lib/types/common';

import Cover from './album/Cover';
import Title from './album/Title';
import Label from './album/Label';

type Props = {
  album: AlbumBasic,
};

const AlbumItem = ({ album }: Props) => (
  <div style={{ width: '170px', marginBottom: '1.5em', marginRight: '0.9em' }}>
    <Link to={`/album/${album._id}`}>
      <Cover src={album.images[1].href} />
    </Link>
    <br />

    <Title style={{ width: '170px' }}>{`${album.name} - ${album.album_type}`}</Title>

    <Label>
      <LinkEntity entity={album.label} as="table" />
    </Label>
  </div>
);

export default AlbumItem;
