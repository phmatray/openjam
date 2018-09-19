import React from 'react';
import PropTypes from 'prop-types';
import Spinner from '../common/Spinner';
import TrackItem from './children/TrackItem';

const TrackItems = ({ tracks, loading }) =>
  tracks === null || loading ? (
    <Spinner />
  ) : tracks.length > 0 ? (
    tracks.map(track => <TrackItem key={track._id} track={track} />)
  ) : (
    <h4>No tracks found...</h4>
  );

TrackItems.propTypes = {
  tracks: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
  loading: PropTypes.bool.isRequired,
};

export default TrackItems;
