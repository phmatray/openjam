import React from 'react';
import PropTypes from 'prop-types';
import Spinner from '../common/Spinner';
import AlbumItem from './children/AlbumItem';

const AlbumItems = ({ albums, loading }) =>
  albums === null || loading ? (
    <Spinner />
  ) : albums.length > 0 ? (
    albums.map(album => <AlbumItem key={album._id} album={album} />)
  ) : (
    <h4>No albums found...</h4>
  );

AlbumItems.propTypes = {
  albums: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
  loading: PropTypes.bool.isRequired,
};

export default AlbumItems;
