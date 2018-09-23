import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const LinkArtist = ({ artist }) => <Link to={`/artist/${artist._id}`}>{artist.name}</Link>;

LinkArtist.propTypes = {
  artist: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired,
};

export default LinkArtist;
