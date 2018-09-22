import React from 'react';
import PropTypes from 'prop-types';
import Spinner from '../common/Spinner';
import ArtistItem from './children/ArtistItem';

const ArtistItems = ({ artists, loading }) =>
  artists === null || loading ? (
    <Spinner />
  ) : artists.length > 0 ? (
    artists.map(artist => <ArtistItem key={artist._id} artist={artist} />)
  ) : (
    <h4>No artists found...</h4>
  );

ArtistItems.propTypes = {
  artists: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
  loading: PropTypes.bool.isRequired,
};

export default ArtistItems;
