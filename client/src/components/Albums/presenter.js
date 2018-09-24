import React from 'react';
import PropTypes from 'prop-types';
import Spinner from '../common/Spinner';
import AlbumItem from './children/AlbumItem';

const AlbumsPresenter = ({ albums, loading }) =>
  albums === null || loading ? (
    <Spinner />
  ) : albums.length > 0 ? (
    <div
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
      }}
    >
      {albums.map(album => (
        <AlbumItem album={album} key={album._id} />
      ))}
    </div>
  ) : (
    <h4>No albums found...</h4>
  );

AlbumsPresenter.propTypes = {
  albums: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
  loading: PropTypes.bool.isRequired,
};

export default AlbumsPresenter;
