import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const ArtistNameLinks = ({ track }) => {
  return track.artists
    .map(artist => <Link to={`/artist/${artist._id}`}>{artist.name}</Link>)
    .reduce((prev, curr) => [prev, ' & ', curr]);
};

ArtistNameLinks.propTypes = {
  track: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired,
};

export default ArtistNameLinks;
