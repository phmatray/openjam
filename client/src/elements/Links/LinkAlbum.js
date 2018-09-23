import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const LinkAlbum = ({ album }) => <Link to={`/album/${album._id}`}>{album.name}</Link>;

LinkAlbum.propTypes = {
  album: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired,
};

export default LinkAlbum;
