import React from 'react';
import PropTypes from 'prop-types';

const PlaylistCover = ({ tracks }) => {
  return (
    <div
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        borderRadius: '3%',
        overflow: 'hidden',
        border: '1px solid #ccc',
      }}
    >
      <img
        src={tracks[0].coverurl.w400}
        alt="Top left cover"
        style={{ width: '50%', height: '50%' }}
      />
      <img
        src={tracks[1].coverurl.w400}
        alt="Top right cover"
        style={{ width: '50%', height: '50%' }}
      />
      <img
        src={tracks[2].coverurl.w400}
        alt="Bottom left cover"
        style={{ width: '50%', height: '50%' }}
      />
      <img
        src={tracks[3].coverurl.w400}
        alt="Bottom right cover"
        style={{ width: '50%', height: '50%' }}
      />
    </div>
  );
};

PlaylistCover.propTypes = {
  tracks: PropTypes.arrayOf(
    PropTypes.shape({
      coverurl: PropTypes.shape({
        w400: PropTypes.string.isRequired,
      }).isRequired,
    }).isRequired,
  ).isRequired,
};

export default PlaylistCover;
