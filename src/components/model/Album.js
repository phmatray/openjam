import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import Cover from './album/Cover';
import Title from './album/Title';
import Label from './album/Label';
import LinkEntity from '../LinkEntity';

const AlbumItem = ({ album }) => (
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

AlbumItem.propTypes = {
  album: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }).isRequired,
};

export default AlbumItem;
