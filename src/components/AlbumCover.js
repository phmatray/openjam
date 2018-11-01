import React from 'react';
import PropTypes from 'prop-types';

const AlbumCover = ({ album }) => (
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

AlbumCover.propTypes = {
  album: PropTypes.shape({
    images: PropTypes.arrayOf(
      PropTypes.shape({
        href: PropTypes.string,
      }).isRequired,
    ).isRequired,
  }).isRequired,
};

export default AlbumCover;
