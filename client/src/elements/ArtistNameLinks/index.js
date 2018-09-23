import React from 'react';
import PropTypes from 'prop-types';
import LinkArtist from '../Links/LinkArtist';

const ArtistNameLinks = ({ track }) => {
  return track.artists
    .map(artist => <LinkArtist artist={artist} />)
    .reduce((prev, curr) => [prev, ' & ', curr]);
};

ArtistNameLinks.propTypes = {
  track: PropTypes.shape({
    artists: PropTypes.array.isRequired,
  }).isRequired,
};

export default ArtistNameLinks;
