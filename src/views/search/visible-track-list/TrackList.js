import React from 'react';
import PropTypes from 'prop-types';

import Track from './track-list/Track';

const TrackList = ({ tracks, onTrackClick }) => (
  <ul>
    {tracks.map(
      track =>
        track && <Track key={track._id} {...track} onClick={() => onTrackClick(track._id)} />,
    )}
  </ul>
);

TrackList.propTypes = {
  tracks: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
      completed: PropTypes.bool.isRequired,
      title: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
  onTrackClick: PropTypes.func.isRequired,
};

export default TrackList;
