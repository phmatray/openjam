import React from 'react';
import PropTypes from 'prop-types';
import TrackItem from './children/TrackItem';
import Body from '../../../elements/UI/Body';
import Flex from '../../../elements/UI/Flex';
import H2 from '../../../elements/Titles/H2';

const TracksPresenter = ({ tracks }) => (
  <Body breadcrumbSegments={['Tracks']} description="Pick some music by track.">
    <H2 header="What's new" />
    <Flex>
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
