import React from 'react';
import PropTypes from 'prop-types';
import LinkEntity from './LinkEntity';

const LinkArtistNames = ({ artists, as }) =>
  artists.length > 0 &&
  artists
    .map(artist => <LinkEntity key={artist._id} entity={artist} as={as} />)
    .reduce((prev, curr) => [prev, ' & ', curr]);

LinkArtistNames.propTypes = {
  artists: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
  as: PropTypes.oneOf(['link', 'table', 'inverted']),
};

LinkEntity.defaultProps = {
  as: 'link',
};

export default LinkArtistNames;
