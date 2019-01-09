import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import { connect } from 'react-redux';
import { Divider } from 'semantic-ui-react';

import LinkArtistNames from '../LinkArtistNames';
import LinkEntity from '../LinkEntity';
import Div from '../Div';
import {
  playTrack,
  actions,
  getPlaying,
  getCollectionId,
  getCurrent,
} from '../../reducers/ui/player';

import ContentBlock from './track/ContentBlock';
import CoverToggle from './track/CoverToggle';
import { Details, Artists } from './track/Atoms';

const TrackItem = ({ track, playTrack, pause, playerPlaying, playerCollectionId }) => {
  const isNew = () => {
    const startDate = moment().subtract(21, 'days');
    const trackDate = moment(track.date);
    const isNew = trackDate > startDate;
    return isNew;
  };

  const isActive = track._id === playerCollectionId;

  return (
    <ContentBlock active={isActive}>
      <Div mr="0.5em">
        <CoverToggle
          track={track}
          isActive={isActive}
          isNew={isNew()}
          playTrack={playTrack}
          pause={pause}
          playerPlaying={playerPlaying}
        />
      </Div>
      <Details>
        <Divider style={{ margin: '0 0 0.6em 0' }} />
        <LinkEntity entity={track} as="table" strong />
        <Artists>
          <LinkArtistNames artists={track.artists.map(a => a.artist)} as="table" />
        </Artists>
      </Details>
    </ContentBlock>
  );
};

TrackItem.propTypes = {
  track: PropTypes.shape({
    artists: PropTypes.arrayOf(
      PropTypes.shape({
        artist: PropTypes.shape({
          name: PropTypes.string.isRequired,
        }),
      }).isRequired,
    ).isRequired,
    title: PropTypes.string.isRequired,
    coverurl: PropTypes.shape({
      w200: PropTypes.string.isRequired,
    }).isRequired,
    edit: PropTypes.string,
  }).isRequired,
};

const mapStateToProps = state => ({
  playerPlaying: getPlaying(state),
  playerCollectionId: getCollectionId(state),
  playerTrack: getCurrent(state),
});

export default connect(
  mapStateToProps,
  { playTrack, pause: actions.pause },
)(TrackItem);
