// @flow

import React from 'react';
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

type Props = {
  track: {
    artists: [{ artist: { name: string } }],
    title: string,
    coverurl: { w200: string },
    edit: string,
  },
};

const TrackItem = ({ track, playTrack, pause, playerPlaying, playerCollectionId }: Props) => {
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

const mapStateToProps = state => ({
  playerPlaying: getPlaying(state),
  playerCollectionId: getCollectionId(state),
  playerTrack: getCurrent(state),
});

export default connect(
  mapStateToProps,
  { playTrack, pause: actions.pause },
)(TrackItem);
