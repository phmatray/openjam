import React from 'react';
import PropTypes from 'prop-types';
import TrackItem from './tracks-presenter/TrackItem';
import Body from '../../components/Body';
import Flex from '../../components/Flex';
import H2 from '../../components/H2';

const TracksPresenter = ({ tracks }) => (
  <Body breadcrumbSegments={['Tracks']} description="Pick some music by track.">
    <H2 header="What's new" />
    <Flex wrap justifyStart>
      {tracks.map(track => (
        <TrackItem key={track._id} track={track} />
      ))}
    </Flex>
  </Body>
);

TracksPresenter.propTypes = {
  tracks: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};

export default TracksPresenter;
