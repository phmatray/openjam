import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Cover, Title, Label } from './style';
import LinkLabel from '../../../elements/Links/LinkLabel';

const AlbumItem = ({ album }) => {
  return (
    <div style={{ width: '170px', marginBottom: '1.5em', marginRight: '0.9em' }}>
      <Link to={`/album/${album._id}`}>
        <Cover src={album.images[1].href} />
      </Link>
      <br />

      <Title style={{ width: '170px' }}>
        {album.name} - {album.album_type}
      </Title>

      <Label>
        <LinkLabel label={album.label} />
      </Label>
    </div>
  );
};

AlbumItem.propTypes = {
  album: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }).isRequired,
};

export default AlbumItem;
