import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const LinkArtist = ({ track }) => (
  <Link to={`/track/${track._id}`}>
    {track.title} {track.edit}
  </Link>
);

LinkArtist.propTypes = {
  track: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    edit: PropTypes.string,
  }).isRequired,
};

export default LinkArtist;
