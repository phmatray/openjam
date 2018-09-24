import React from 'react';
import PropTypes from 'prop-types';
import LinkArtist from '../Links/LinkArtist';

const ArtistNameLinks = ({ artists }) => {
  return artists
    .map(artist => <LinkArtist key={artist._id} artist={artist} />)
    .reduce((prev, curr) => [prev, ' & ', curr]);
};

ArtistNameLinks.propTypes = {
  artists: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};

export default ArtistNameLinks;
